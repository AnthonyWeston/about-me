<template>
  <v-app :theme="theme" full-height>
    <v-app-bar app name="app-bar" color="primary">
      <v-avatar image="rainbow-black-mage.png" class="ma-2" alt="Anthony Weston" />
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
            <v-list-item>
              <v-switch
                v-model="theme"
                class="elevation-0"
                true-value="code-dark"
                false-value="code-light"
                color="accent"
                label="Dark Mode"
              />
            </v-list-item>
          </v-list>
          <template #activator="{ props }">
            <v-btn
              class="elevation-2"
              icon="mdi-menu"
              v-bind="props"
            />
          </template>
        </v-menu>
      </template>
    </v-app-bar>
    <v-main>
      <v-sheet style="height: 100%;" class="pa-4" color="surface-darken-2">
        <VEditor style="height: 100%;">
          <template #default="{ component, props }">
            <component
              :is="component"
              v-bind="props"
            />
          </template>
        </VEditor>
      </v-sheet>
    </v-main>
    <v-footer app class="flex-grow-0 d-flex justify-center bg-primary">
      <VDependencyInfo />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import VDependencyInfo from './components/content/VDependencyInfo.vue';

export default defineComponent({
  name: 'App',
  components: { VDependencyInfo },
  setup() {
    const theme = ref('code-dark');
    return { theme };
  },
});
</script>

<style lang="scss">
  :root {
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

  $duration: 0.3s;
  $ease-function: ease-out;

  .v-footer, .v-app-bar, main {
    & * {
      will-change: color;
      transition: background-color $duration $ease-function, color $duration $ease-function;
    }
    will-change: color;
    transition: background-color $duration $ease-function, color $duration $ease-function;
  }

</style>
