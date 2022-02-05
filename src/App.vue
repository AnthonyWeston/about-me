<template>
  <v-app>
    <v-main>
      <v-container class="full-height">
        <v-card
          class="full-height"
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
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TSCode from '@/components/code/TSCode.vue';
import VTabs from '@/components/ui/VTabs.vue';

export default defineComponent({
  name: 'App',
  components: {
    TSCode,
    VTabs,
  },
});
</script>

<style>
  :root {
    color-scheme: dark;
  }

  .full-height {
    height: 100%;
  }
</style>
