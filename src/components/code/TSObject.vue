<template>
  <span class="ts-object">
    <TSLink
      v-if="collapsible"
      :icon="collapsed ? 'mdi-chevron-right' : 'mdi-chevron-down'"
      @click="collapsed = !collapsed"
    />
    <span :class="`text-depth-mod-${depth % 3}`">{{ openBracket }}</span>

    <span class="d-inline-block">
      <v-slide-x-transition>
        <div v-show="collapsible && collapsed" class="collapsed">
          <span>...</span>
          <span :class="`text-depth-mod-${depth % 3}`">{{ closeBracket }}</span>
          <template v-if="depth > 0">,</template>
          <br class="test">
        </div>
      </v-slide-x-transition>
    </span>
    <br v-show="collapsible && collapsed" class="collapsed">

    <span>
      <v-expand-transition>
        <component :is="isSingleEntryPerLine ? 'div' : 'span'" v-show="!(collapsible && collapsed)">
          <template v-if="unwrappedValue.constructor === Object && !isSingleEntryPerLine">&nbsp;</template>

          <template
            v-for="([key, objectValue], index) in Object.entries(unwrappedValue)"
            :key="key"
          >
            <template v-if="isSingleEntryPerLine">
              <!-- <br v-if="index === 0" class="before-object-entry-tab"> -->
              <TSTab :tabs="depth + 1" />
            </template>

            <span v-if="!Array.isArray(unwrappedValue)" class="text-object-key">{{ `${key}:` }}&nbsp;</span>

            <TSLiteral ref="child" :value="!(objectValue instanceof Object) ? `${entriesPerLine} ${isSingleEntryPerLine} ${objectValue} ${index % Object.entries(unwrappedValue).length} ${collapsible}` : objectValue" />

            <template v-if="!(unwrap(objectValue) instanceof Object) && (isSingleEntryPerLine || index < Object.keys(value).length - 1)">,&nbsp;</template>

            <br
              v-if="isSingleEntryPerLine && !(unwrap(objectValue) instanceof Object && getIsSingleEntryPerLine(objectValue))"
              :class="['after-object-entry', `depth-${depth}`]"
            >

            <template v-if="unwrappedValue instanceof Array && index !== Object.keys(unwrappedValue).length - 1 && (index + 1) % entriesPerLine === 0">
              <br class="after-object-entry-2"><TSTab :tabs="depth + 1" />
            </template>
          </template>

          <TSTab v-if="isSingleEntryPerLine" :tabs="depth" />

          <template v-if="unwrappedValue.constructor === Object && !isSingleEntryPerLine">&nbsp;</template>
          <span :class="`text-depth-mod-${depth % 3}`">
            {{ closeBracket }}
          </span><span
            v-if="depth !== 0 && unwrappedValue instanceof Object"
            v-text="','"
          /><span
            v-else-if="depth === 0"
            v-text="';'"
          />
        </component>
      </v-expand-transition>
    </span>
  </span>
</template>

<script lang="ts">

import {
  computed,
  defineComponent,
  inject,
  PropType,
  provide,
  ref,
} from 'vue';
import { useDisplay } from 'vuetify/lib/framework';
import { useNextBreakpoint } from '@/components/ui/display';
import { ContentLink, unwrap } from './content-link';
import {
  Literal, NonPrimitiveValue,
} from './literal-types';
import { useDefaults } from '../defaults';

export default defineComponent({
  name: 'TSObject',
  props: {
    value: {
      type: Object as PropType<Literal<NonPrimitiveValue> | ContentLink<Literal<NonPrimitiveValue>>>,
      required: true,
    },
  },
  setup(props) {
    const unwrappedValue = computed(() => unwrap(props.value));

    const depth = ref(inject<number>('depth', 0));
    provide('depth', depth.value + 1);

    const openBracket = computed(() => (Array.isArray(unwrappedValue.value) ? '[' : '{'));
    const closeBracket = computed(() => (Array.isArray(unwrappedValue.value) ? ']' : '}'));

    const injectedEntriesPerLine = inject<number>('entriesPerLine', 0);

    const getEntriesPerLine = (value: Literal | ContentLink<Literal>): number => {
      const unwrapped = unwrap(value);
      if (collapsible.value || !(unwrapped instanceof Object)) return 1;

      if (unwrapped instanceof Array) {
        // if (entriesPerLine.value === 1) {
        //   return true;
        // } else if (collapsible.value || values.some((value) => value?.constructor === Object || value?.constructor === Array)) {
        //   // Avoiding instanceof Object here because value could be a Function or a ContentLink
        //   return true;
        // } else if (props.value instanceof Array) {
        //   const breakpointWidth = display.thresholds.value[nextBreakpoint.value];
        //   const characterLimit = (0.75 * breakpointWidth) / 16;
        //   return values.map((x) => String(unwrap(x))).join().length > characterLimit;
        // } else {
        //   return values.length > entriesPerLine.value * 2;
        // }      const maxEntries = injected;
        const maxEntries = 3;
        return maxEntries;
      } else {
        // if (collapsible.value) {
        //   maxEntries = 1;
        // } else if (display.lgAndUp.value) {
        //   maxEntries = 5;
        // } else if (display.mdAndUp.value) {
        //   maxEntries = 3;
        // } else if (display.sm.value) {
        //   maxEntries = 2;
        // } else {
        //   maxEntries = 1;
        // }
        const maxEntries = injectedEntriesPerLine;

        if (Object.keys(unwrapped).length > maxEntries) {
          return 1;
        } else {
          return maxEntries;
        }
      }
    };
    const entriesPerLine = computed(() => getEntriesPerLine(props.value));

    const defaults = useDefaults();

    const injectedCollapsed = ref(inject<boolean>('collapsed'));
    const collapsible = computed(() => injectedCollapsed.value); // && defaults.value.global.density === 'compact');
    const collapsed = ref(depth.value > 0);

    const getIsSingleEntryPerLine = (value: Literal | ContentLink<Literal>): boolean => getEntriesPerLine(unwrap(value)) === 1;
    const isSingleEntryPerLine = computed(() => getIsSingleEntryPerLine(props.value));

    return {
      openBracket,
      closeBracket,
      entriesPerLine,
      isSingleEntryPerLine,
      getIsSingleEntryPerLine,
      unwrappedValue,
      depth,
      collapsible,
      collapsed,
      unwrap,
    };
  },
});

</script>

<style lang="scss">
  // .ts-object {
  //   display: contents;
  // }

  // br.after-object-entry +  * {
  //   outline: 1px dotted darkorange;
  //   box-sizing: content-box;
  // }

  // br.before-object-entry-tab +  * {
  //   outline: 1px dotted red;
  //   box-sizing: content-box;
  // }

  // .object-lines {
  //   &:not(.inline) {
  //     margin-left: 2ch;
  //   }

  //   &.inline {
  //     display: inline;

  //     > .object-content {
  //       display: inline;
  //       margin-left: 1ch;
  //       margin-right: -1ch;

  //       &:not(:first-child) {
  //         margin-left: 2ch
  //       }
  //     }
  //   }

  //   .object-content:last-child {
  //     outline: 2px solid green;
  //     display: inline-block;
  //     margin-right: 1ch;
  //   }
  // }
</style>
