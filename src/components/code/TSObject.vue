<!-- Placing this first because Vetur is having a weird syntax highlighting issue -->

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

    const display = useDisplay();

    const getEntriesPerLine = (value: Literal | ContentLink<Literal>): number => {
      const unwrapped = unwrap(value);
      if (!(unwrapped instanceof Object)) return 1;

      let maxEntries;
      if (display.lgAndUp.value) {
        maxEntries = 5;
      } else if (display.mdAndUp.value) {
        maxEntries = 3;
      } else if (display.smAndDown.value) {
        return 1;
      } else {
        throw new RangeError('Something wrong with display values');
      }

      const objectValues = Object.values(unwrapped).map((x) => unwrap(x));

      if (objectValues.some((x) => x instanceof Object)
        || unwrapped.constructor === Object && Object.keys(unwrapped).length > maxEntries) {
        return 1;
      }

      if (maxEntries !== 1 && unwrapped instanceof Array && !objectValues.some((x) => x instanceof Object)) {
        const averageLength = objectValues.map((x) => String(x).length).reduce((total, current) => total + current) / objectValues.length;
        if (averageLength <= 10) maxEntries *= 2;
      }

      return maxEntries;
    };

    const entriesPerLine = computed(() => getEntriesPerLine(props.value));

    const defaults = useDefaults();

    const collapsible = computed(() => depth.value > 0 && isSingleEntryPerLine.value);
    // const collapsible = computed(() => display.smAndDown.value && defaults.value.global.density === 'compact');
    const collapsed = ref(false);

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

            <TSLiteral :value="objectValue" />

            <template v-if="!(unwrap(objectValue) instanceof Object) && (isSingleEntryPerLine || index < Object.keys(value).length - 1)">,&nbsp;</template>

            <br
              v-if="isSingleEntryPerLine && !(unwrap(objectValue) instanceof Object && getIsSingleEntryPerLine(objectValue))"
              :class="['after-object-entry', `depth-${depth}`]"
            >

            <template v-if="!isSingleEntryPerLine && unwrappedValue instanceof Array && (index !== Object.keys(unwrappedValue).length - 1 && ((index + 1) % entriesPerLine === 0))">
              <br class="after-array-entry"><TSTab :tabs="depth + 1" />
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
