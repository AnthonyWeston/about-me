<template>
  <v-app full-height>
    <v-app-bar app>
      <v-avatar image="rainbow-black-mage.png" />
      <v-app-bar-title>About Me</v-app-bar-title>
    </v-app-bar>
    <v-main class="ma-4">
      <VTabs style="height: 100%;">
        <template #default="{ component, props }">
          <component
            :is="component"
            v-bind="props"
          />
        </template>
      </VTabs>
    </v-main>
    <v-footer
      app
      class="flex-grow-0"
    >
      <v-container
        class="d-flex flex-column align-center"
      >
        This project was developed using:
        <div class="d-flex flex-wrap justify-center">
          <VShield dependency="typescript" />
          <VShield dependency="vue" />
          <VShield dependency="pinia" />
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

<style lang="scss">
  :root {
    color-scheme: dark;
    background-color: black;
    overflow: hidden;
  }

  main {
    min-height: 0;
    flex: content !important;
  }

  #app, .v-application, .v-application__wrap {
    height: 100vh;
  }
</style>
