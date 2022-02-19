<template>
  <span :class="primitiveClass">
    <span v-if="typeof value === 'string'">'</span>
    <span class="primitive-value">{{ displayValue }}</span>
    <span v-if="typeof value === 'string'">'</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { Primitive } from './literal-types';

export default defineComponent({
  name: 'TSPrimitive',
  props: {
    value: {
      type: [String, Number, Boolean] as PropType<Primitive>,
      required: false,
      default: undefined,
      validator(value): boolean {
        return value === null || ['string', 'number', 'undefined', 'boolean'].includes(typeof value);
      },
    },
  },
  computed: {
    displayValue(): string {
      return String(this.value);
    },
    primitiveClass(): string {
      if (this.value === null || ['undefined', 'boolean'].includes(typeof this.value)) {
        return 'keyword-literal';
      } else {
        return `${typeof this.value}-literal`;
      }
    },
  },
});

</script>

<style lang="scss">
    @use '@/css/styles';

    .string-literal {
      color: styles.$string-color;
      white-space: nowrap;
    }

    .number-literal {
      color: styles.$number-color
    }

    .keyword-literal {
      color: styles.$keyword-color
    }
</style>
