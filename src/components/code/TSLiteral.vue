<template>
  <component
    :is="componentType"
    :value="value"
  />
</template>

<script lang="ts">
import { ContentLink } from '@/components/code/content-link';
import {
  computed, defineComponent,
} from 'vue';
import { HoverSpec } from '../content/hover-spec';
import { TabSpec } from '../content/tab-spec';
import { Primitive } from './literal-types';

export default defineComponent({
  name: 'TSLiteral',
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

    const computedValue = computed(() => {
      const { value } = props;
      if (value instanceof ContentLink) {
        const { value: linkValue, content } = value;

        if (linkValue instanceof Array) {
          return linkValue.map((item) => (item instanceof ContentLink ? item : new ContentLink(item, content)));
        } else if (linkValue?.constructor === Object) {
          return Object.fromEntries(Object.entries(linkValue).map(([key, item]) =>
            [key, item instanceof ContentLink ? item : new ContentLink(item, content)]));
        }
      } else if (value instanceof Function) {
        return value.call(null);
      }

      return value;
    });

    const componentType = computed(() => {
      const { value } = props;
      if (isPrimitive(value)) {
        return 'TSPrimitive';
      } else if (value instanceof ContentLink) {
        if (value.content instanceof TabSpec) {
          return 'TSTabLink';
        } else if (value.content instanceof HoverSpec) {
          return 'TSHoverLink';
        }
      } else {
        return 'TSObject';
      }

      throw new RangeError(`Couldn't determine component type from ${value}`);
    });

    return {
      componentType,
      computedValue,
    };
  },
});
</script>
