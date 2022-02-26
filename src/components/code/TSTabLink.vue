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

export default defineComponent({
  name: 'TSTabLink',
  props: {
    value: {
      type: ContentLink as PropType<ContentLink<TabSpec>>,
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
