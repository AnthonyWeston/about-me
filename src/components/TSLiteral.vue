<template>
  <component
    :is="componentType"
    :value="value"
    :depth="depth"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TSArray from './TSArray.vue';
import TSObject from './TSObject.vue';
import TSPrimitive from './TSPrimitive.vue';

export default defineComponent({
  name: 'TSLiteral',
  components: {
    TSArray,
    TSObject,
    TSPrimitive,
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array],
      required: false,
      default: undefined,
    },
    depth: {
      required: false,
      default: undefined,
    },
  },
  computed: {
    componentType(): string {
      if (this.isPrimitive) {
        return 'TSPrimitive';
      } else if (Array.isArray(this.value)) {
        return 'TSArray';
      } else {
        return 'TSObject';
      }
    },
    isPrimitive(): boolean {
      return this.value === null || ['undefined', 'string', 'number', 'boolean'].includes(typeof this.value);
    },
  },
});
</script>
