<template>
  <component
    :is="componentType"
    :value="value"
    :depth="depth"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ContentLink } from '@/components/code/content-link';
import TSObject from './TSObject.vue';
import TSPrimitive from './TSPrimitive.vue';

export default defineComponent({
  name: 'TSLiteral',
  components: {
    TSObject,
    TSPrimitive,
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object, Array, ContentLink],
      required: false,
      default: undefined,
    },
    depth: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  computed: {
    componentType(): string {
      if (this.isPrimitive) {
        return 'TSPrimitive';
      } else if (this.value instanceof ContentLink) {
        return 'TSContentLink';
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
