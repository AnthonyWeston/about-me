<template>
  <span :class="primitiveClass">{{ displayValue }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TSPrimitive',
  props: {
    value: {
      type: [String, Number, Boolean],
      required: false,
      default: undefined,
      validator(value): boolean {
        return value === null || ['string', 'number', 'undefined', 'boolean'].includes(typeof value);
      },
    },
  },
  computed: {
    displayValue(): string {
      if (typeof this.value === 'string') {
        return `'${String(this.value)}'`;
      } else {
        return String(this.value);
      }
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
      color: styles.$string-color
    }

    .number-literal {
      color: styles.$number-color
    }

    .keyword-literal {
      color: styles.$keyword-color
    }
</style>
