<template>
  <v-menu open-on-hover transition="fade-transition">
    <template #activator="{ props }">
      <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
      <a>
        <TSLiteral
          v-bind="props"
          :value="value?.value"
          class="link"
        />
      </a>
    </template>

    <v-card color="surface-lighten-1" class="pa-4 rounded-lg" :elevation="8">
      <component :is="value.content.component" />
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { ContentLink } from '@/components/code/content-link';
import { defineComponent, PropType } from 'vue';
import { HoverSpec } from '../content/hover-spec';
import { Literal } from './literal-types';

export default defineComponent({
  name: 'TSHoverLink',
  props: {
    value: {
      type: ContentLink as PropType<ContentLink<Literal, HoverSpec>>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
  .link:deep .primitive-value {
    text-decoration: underline;
  }

</style>
