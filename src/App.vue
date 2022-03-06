<template>
  <v-app full-height>
    <v-app-bar app>
      <v-avatar image="rainbow-black-mage.png" class="ma-2" />
      <v-app-bar-title>About Me</v-app-bar-title>
      <template #append>
        <v-menu
          transition="slide-y-transition"
          anchor="bottom end"
          :z-index="50000"
        >
          <v-list
            color="surface-lighten-1"
            class="rounded-lg ma-3"
            :z-index="9999"
          >
            <v-list-item>Coming soon!</v-list-item>
          </v-list>

          <template #activator="{ props }">
            <v-btn icon="mdi-menu" v-bind="props" />
          </template>
        </v-menu>
      </template>
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

  /* Markdown component stuff */
  html {
    overflow: hidden !important;
  }

  section * {
    padding: revert;
    margin: revert;

    &:first-child {
      margin-top: 0;
    }
  }
</style>
