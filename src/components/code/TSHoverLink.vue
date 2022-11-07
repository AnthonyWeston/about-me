<template>
  <!-- NOTE: There's currently a bug that causes awkward sliding transition behavior
    after resizing the screen, even when the transition is set to "fade-transition". -->
  <v-tooltip
    bottom="true"
    open-on-click
    open-delay="100"
    close-delay="100"
    location="bottom right"
  >
    <template #activator="{ props }">
      <TSLink icon="mdi-tooltip-text-outline" v-bind="props">
        <template #default="{ attrs }">
          <TSLiteral
            v-bind="attrs"
            :value="value?.value"
          />
        </template>
      </TSLink>
    </template>
    <v-card
      max-width="50vw"
      color="surface-lighten-1"
      class="fade-transition pa-4 rounded-xl"
      :elevation="8"
    >
      <component :is="value.content.component" />
    </v-card>
  </v-tooltip>
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
  .v-icon {
    font-size: 1em !important;
  }

  ::v-deep .v-overlay__content {
    background-color: rgba(0, 0, 0, 0)
  }
</style>
