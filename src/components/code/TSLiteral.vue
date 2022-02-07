<template>
  <component
    :is="componentType"
    :value="computedValue"
    :depth="depth"
  />
</template>

<script lang="ts">
import { ContentLink } from '@/components/code/content-link';
import {
  computed, defineComponent,
} from 'vue';
import { Primitive } from './literal-types';
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
      type: [String, Number, Boolean, Object, Array, ContentLink, Function],
      required: false,
      default: undefined,
    },
    depth: {
      type: Number,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    const isPrimitive = (value: unknown): value is Primitive => value === null
      || ['undefined', 'string', 'number', 'boolean'].includes(typeof value);
    const computedValue = computed(() => (props.value instanceof Function ? props.value.call(null) : props.value));

    const componentType = computed(() => {
      const { value } = computedValue;
      if (isPrimitive(value)) {
        return 'TSPrimitive';
      } else if (value instanceof ContentLink) {
        return 'TSContentLink';
      } else {
        return 'TSObject';
      }
    });

    return {
      componentType,
      computedValue,
    };
  },
});
</script>
