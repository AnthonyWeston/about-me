<template>
  <a>
    <TSPrimitive
      :value="value?.value"
      class="link"
      @click="addTab"
    />
  </a>
</template>

<script lang="ts">
import { ContentLink } from '@/components/code/content-link';
import { key } from '@/store';
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { TabSpec } from '../ui/tab-spec';
import TSPrimitive from './TSPrimitive.vue';

export default defineComponent({
  name: 'TSContentLink',
  components: {
    TSPrimitive,
  },
  props: {
    value: {
      type: ContentLink,
      required: true,
    },
  },
  setup(props) {
    const store = useStore(key);
    const addTab = () => store.commit('addTab', TabSpec.copyOf(props.value.content));
    return { addTab };
  },
});
</script>

<style lang="scss" scoped>
  .link:deep .primitive-value {
    text-decoration: underline;
  }
</style>
