<template>
  <v-app :theme="theme" full-height>
    <v-defaults-provider :defaults="defaults">
      <v-app-bar
        app
        name="app-bar"
        color="primary"
      >
        <!-- Defaults have a bug in 3.0.0-beta.0 -->
        <!-- See: https://github.com/vuetifyjs/vuetify/issues/14881#issuecomment-1079771148 -->
        <v-avatar
          :density="defaults.global.density"
          image="rainbow-black-mage.png"
          class="ma-2"
        />
        <v-app-bar-title>About Me</v-app-bar-title>
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
            <v-list-item class="align-center">
              <v-switch
                v-model="theme"
                hide-details
                class="elevation-0"
                true-value="code-dark"
                false-value="code-light"
                color="accent"
                label="Dark Mode"
              />
            </v-list-item>
            <v-list-item class="align-center">
              <v-btn
                variant="text"
                class="text-on-primary text-body-1"
                href="https://github.com/AnthonyWeston/anthonyweston.github.io/issues/new/choose"
                target="_blank"
              >
                <v-icon
                  class="ml-n3 mr-3 text-high-emphasis"
                  icon="mdi-alert-circle"
                  size="large"
                />
                <v-label>Report an Issue</v-label>
              </v-btn>
            </v-list-item>
          </v-list>
          <template #activator="{ props }">
            <v-app-bar-nav-icon
              class="elevation-2"
              icon="mdi-menu"
              v-bind="props"
            />
          </template>
        </v-menu>
      </v-app-bar>
      <v-main>
        <v-sheet style="height: 100%;" class="pa-4" color="surface-darken-2">
          <VEditor style="height: 100%;">
            <template #default="{ component, props }">
              <KeepAlive>
                <component
                  :is="component"
                  v-bind="props"
                />
              </KeepAlive>
            </template>
          </VEditor>
        </v-sheet>
      </v-main>
      <v-footer app class="flex-grow-0 d-flex justify-center bg-primary">
        <VDependencyInfo />
      </v-footer>
    </v-defaults-provider>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useDefaults } from './components/defaults';

export default defineComponent({
  name: 'App',
  setup() {
    const theme = ref('code-dark');
    const defaults = useDefaults();

    return { theme, defaults };
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
    color: var(--v-on-surface)
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

  .v-menu label, .v-switch, .v-switch {
    opacity: 1 !important;
  }
</style>
