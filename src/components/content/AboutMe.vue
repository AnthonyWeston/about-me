<template>
  <v-card
    theme="dark"
    title="About Me"
    prepend-avatar="rainbow-black-mage.png"
  >
    <VTabs>
      <template #default="{ component, props }">
        <component
          :is="component"
          v-bind="props"
        />
      </template>
    </VTabs>
  </v-card>
</template>

<script lang="ts">
import TSCode from '@/components/code/TSCode.vue';
import VTabs from '@/components/ui/VTabs.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AboutMe',
  components: {
    TSCode,
    VTabs,
  },
});
</script>
