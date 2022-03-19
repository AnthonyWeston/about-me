<template>
  <span :class="`text-depth-mod-${depth % 3}`">{{ openBracket }}</span>
  <div :class="{ 'object-lines': true, inline: !isSingleEntryPerLine }">
    <template
      v-for="([key, objectValue], index) in Object.entries(unwrap(value))"
      :key="key"
    >
      <div class="object-content">
        <span v-if="!Array.isArray(unwrap(value))" class="text-object-key">{{ `${key}:` }}&nbsp;</span>
        <TSLiteral :value="objectValue" :depth="depth + 1" />
        <template v-if="isSingleEntryPerLine || index < Object.keys(value).length - 1">,</template>
      </div>
    </template>
  </div>
  <span :class="`text-depth-mod-${depth % 3}`">{{ closeBracket }}</span>
</template>

<script lang="ts">

import {
  computed,
  defineComponent,
  PropType,
} from 'vue';
import { useDisplay } from 'vuetify/lib/framework';
import { useNextBreakpoint } from '@/components/ui/display';
import { ContentLink } from './content-link';
import {
  Literal, NonPrimitiveValue, RawValueType,
} from './literal-types';

export default defineComponent({
  name: 'TSObject',
  props: {
    value: {
      type: Object as PropType<Literal<NonPrimitiveValue> | ContentLink<Literal<NonPrimitiveValue>>>,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
      validator: Number.isInteger,
      default: 0,
    },
  },
  setup(props) {
    function unwrap<T extends RawValueType>(value: Literal<T> | ContentLink<Literal<T>>): T {
      if (value instanceof ContentLink) {
        return unwrap(value.value);
      } else if (value instanceof Function) {
        return unwrap(value());
      } else {
        return value;
      }
    }

    const openBracket = computed(() => (Array.isArray(unwrap(props.value)) ? '[' : '{'));
    const closeBracket = computed(() => (Array.isArray(unwrap(props.value)) ? ']' : '}'));

    const display = useDisplay();

    const maxEntriesPerLine = computed((): number => {
      if (display.lgAndUp.value) {
        return 5;
      } else if (display.mdAndUp.value) {
        return 3;
      } else if (display.sm.value) {
        return 2;
      } else {
        return 1;
      }
    });

    const nextBreakpoint = useNextBreakpoint();
    const isSingleEntryPerLine = computed((): boolean => {
      const values = Object.values(unwrap(props.value));

      // Avoiding instanceof Object here because value could be a Function or a ContentLink
      if (values.some((value) => value?.constructor === Object || value?.constructor === Array)) {
        return true;
      } else if (props.value instanceof Array) {
        const breakpointWidth = display.thresholds.value[nextBreakpoint.value];
        const characterLimit = (0.75 * breakpointWidth) / 16;
        return values.map((x) => String(unwrap(x))).join().length > characterLimit;
      } else {
        return values.length > maxEntriesPerLine.value * 2;
      }
    });

    return {
      openBracket,
      closeBracket,
      maxEntriesPerLine,
      isSingleEntryPerLine,
      unwrap,
    };
  },
});

</script>

<style lang="scss">

  .object-lines {
    &:not(.inline) {
      margin-left: 2ch;
    }

    &.inline {
      display: inline;

      > .object-content {
        display: inline;
        margin-left: 1ch;
        margin-right: -1ch;

        &:not(:first-child) {
          margin-left: 2ch
        }

        &:last-child {
          margin-right: 1ch;
        }
      }
    }
  }
</style>
