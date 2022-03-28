<template>
  <slot :click="addTab">
    <TSLink icon="mdi-open-in-new" @click="addTab">
      <template #default="{ attrs }">
        <TSLiteral
          v-bind="attrs"
          :value="value?.value"
        />
      </template>
    </TSLink>
  </slot>
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
