<template>
  <!-- NOTE: There's currently a bug that causes awkward sliding transition behavior
    after resizing the screen, even when the transition is set to "fade-transition". -->
  <v-overlay
    open-on-hover
    open-on-click
    :transition="false"
    position-strategy="connected"
    :scrim="false"
    :open-delay="150"
    :close-delay="150"
  >
    <template #activator="{ props }">
      <!-- eslint-disable-next-line vuejs-accessibility/anchor-has-content -->
      <a v-bind="props">
        <TSLiteral
          :value="value?.value"
          class="link"
        />
      </a>
    </template>
    <v-card
      :max-width="maxWidth"
      color="surface-lighten-1"
      class="fade-transition pa-4 rounded-lg"
      :elevation="8"
    >
      <component :is="value.content.component" />
    </v-card>
  </v-overlay>
</template>

<script lang="ts">
import { ContentLink } from '@/components/code/content-link';
import { computed, defineComponent, PropType } from 'vue';
import { useDisplay } from 'vuetify/lib/framework';
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
  setup() {
    const display = useDisplay();

    return {
      maxWidth: computed(() => (display.smAndDown.value ? '80vw' : '50vw')),
    };
  },
});
</script>

<style lang="scss" scoped>
  .link:deep .primitive-value {
    text-decoration: underline;
  }
</style>
