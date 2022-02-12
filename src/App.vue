<template>
  <v-app>
    <v-main>
      <v-card
        theme="dark"
        title="About Me"
        prepend-avatar="rainbow-black-mage.png"
        class="ma-4"
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
    </v-main>
    <v-footer app>
      <v-container
        class="d-flex flex-column align-center"
      >
        This project was developed using:
        <div class="d-flex flex-wrap justify-center">
          <VShield dependency="typescript" />
          <VShield dependency="vue" />
          <VShield dependency="vuex" />
          <VShield dependency="vuetify" />
          <VShield dependency="@vue/cli" />
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TSCode from '@/components/code/TSCode.vue';
import VTabs from '@/components/ui/VTabs.vue';
import VShield from '@/components/ui/VShield.vue';

export default defineComponent({
  name: 'App',
  components: {
    TSCode,
    VTabs,
    VShield,
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
