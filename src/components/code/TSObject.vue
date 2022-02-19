<template>
  <span :class="`depth-mod-${depth % 3}`">{{ openBracket }}</span>
  <div :class="{ 'object-lines': true, inline: !isSingleEntryPerLine }">
    <template
      v-for="(key, index) in Object.keys(value)"
      :key="key"
    >
      <div class="object-content">
        <span v-if="!Array.isArray(value)" class="object-key">{{ `${key}:` }}&nbsp;</span>
        <TSLiteral :value="value[key]" :depth="depth + 1" />
        <template v-if="isSingleEntryPerLine || index < Object.keys(value).length - 1">,</template>
      </div>
    </template>
  </div>
  <span :class="`depth-mod-${depth % 3}`">{{ closeBracket }}</span>
</template>

<script lang="ts">

import {
  computed,
  defineComponent,
} from 'vue';
import { useDisplay } from 'vuetify';

export default defineComponent({
  name: 'TSObject',
  props: {
    value: {
      type: Object,
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
    const openBracket = computed(() => (Array.isArray(props.value) ? '[' : '{'));
    const closeBracket = computed(() => (Array.isArray(props.value) ? ']' : '}'));

    const display = useDisplay();

    const maxEntriesPerLine = computed((): number => {
      if (display.lgAndUp.value) {
        return 5;
      } else if (display.smAndUp.value) {
        return 3;
      } else {
        return 1;
      }
    });

    const orderedBreakpoints = Object.entries(display.thresholds.value)
      .sort(([bp1, threshold1], [bp2, threshold2]) => threshold1 as number - (threshold2 as number))
      .map(([breakpoint, threshold]) => breakpoint);

    const nextBreakpoint = (breakpoint: string) =>
      orderedBreakpoints[Math.min(orderedBreakpoints.length - 1, orderedBreakpoints.indexOf(breakpoint) + 1)];

    const isSingleEntryPerLine = computed((): boolean => {
      const values = Object.values(props.value);

      // Avoiding instanceof Object here because value could be a Function or a ContentLink
      if (values.some((value) => value.constructor === Object || value.constructor === Array)) {
        return true;
      } else if (props.value instanceof Array) {
        const breakpointWidth = display.thresholds.value[nextBreakpoint(display.name.value)];
        const characterLimit = breakpointWidth / 16;
        return values.map((x) => String(x)).join().length > characterLimit;
      } else {
        return values.length > maxEntriesPerLine.value * 2;
      }
    });

    return {
      display,
      openBracket,
      closeBracket,
      maxEntriesPerLine,
      isSingleEntryPerLine,
    };
  },
});

</script>

<style lang="scss">
  @use '@/css/styles';

  .object-key {
    color: styles.$object-key-color;
  }

  .depth-mod-0 {
    color: #ffd700;
  }
  .depth-mod-1 {
    color: #da70d6;
  }
  .depth-mod-2 {
    color: #179fff;
  }

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
