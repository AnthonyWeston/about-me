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
import { defineComponent } from 'vue';
import { TabSpec } from '../ui/tab-spec';

export default defineComponent({
  name: 'TSContentLink',
  props: {
    value: {
      type: ContentLink,
      required: true,
    },
  },
  setup(props) {
    const store = useTabStore();
    const addTab = () => store.addTab(TabSpec.copyOf(props.value.content));
    return { addTab };
  },
});
</script>

<style lang="scss" scoped>
  .link:deep .primitive-value {
    text-decoration: underline;
  }
</style>
