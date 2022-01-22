<template>
  <v-card
    theme="dark"
    title="About Me"
    prepend-avatar="rainbow-black-mage.png"
  >
    <v-tabs
      :tabs="tabs"
    >
      <template #default="{ component, props }">
        <component
          :is="component"
          v-bind="props"
        />
      </template>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TSCode from '@/components/TSCode.vue';
import VTabs from '@/components/VTabs.vue';

export default defineComponent({
  name: 'AboutMe',
  components: {
    TSCode,
    VTabs,
  },
  data() {
    return {
      tabs: [
        { name: 'about-me.ts', component: 'TSCode', props: {} },
        { name: 'test.txt', component: 'TSLiteral', props: {} },
      ],
    };
  },
});
</script>
