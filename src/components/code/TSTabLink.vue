<template>
  <a>
    <slot :click="addTab">
      <TSPrimitive
        :value="value?.value"
        class="link"
        @click="addTab"
      />
    </slot>
  </a>
</template>

<script lang="ts">
import { ContentLink } from '@/components/code/content-link';
import { useTabStore } from '@/store';
import { defineComponent, PropType } from 'vue';
import { TabSpec } from '../content/tab-spec';
import { Literal } from './literal-types';

export default defineComponent({
  name: 'TSTabLink',
  props: {
    value: {
      type: ContentLink as PropType<ContentLink<Literal, TabSpec>>,
      required: true,
    },
  },
  setup(props) {
    const store = useTabStore();
    const addTab = () => store.addTab(props.value.content.getCopy());
    return { addTab };
  },
});
</script>

<style lang="scss" scoped>
  .link:deep .primitive-value {
    text-decoration: underline;
  }
</style>
