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
import { defineComponent } from 'vue';
import { ContentLink } from '@/components/code/content-link';
import { useStore } from 'vuex';
import { key } from '@/store';
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
    const addTab = () => store.commit('addTab', props.value.content);
    return { addTab };
  },
});
</script>

<style lang="scss" scoped>
  .link:deep .primitive-value {
    text-decoration: underline;
  }
</style>
