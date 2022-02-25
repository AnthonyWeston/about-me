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
    <v-footer app class="flex-grow-0 d-flex justify-center">
      <VDependencyInfo />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VDependencyInfo from './components/content/VDependencyInfo.vue';

export default defineComponent({
  name: 'App',
  components: { VDependencyInfo },
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
