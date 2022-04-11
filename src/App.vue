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
            <v-app-bar-nav-icon
              class="elevation-2"
              icon="mdi-menu"
              v-bind="props"
            />
          </template>
        </v-menu>
      </v-app-bar>
      <v-main>
        <!-- <v-sheet style="height: 100%;" class="pa-4" color="surface-darken-2">
          <VEditor style="height: 100%;">
            <template #default="{ component, props }"> -->
        <v-container>
          <v-row justify="end">
            <v-col cols="5">
              <div class="text-h3">collapsed: false, entriesPerLine: 1</div>
            </v-col>
            <v-col cols="5">
              <div class="text-h3">collapsed: false, entriesPerLine: 3</div>
            </v-col>
          </v-row>
          <v-row no-gutters justify="end">
            <v-col :cols="5">
              <TSInject :collapsed="false" :entries-per-line="1">
                <div class="small">
                  <component
                    :is="'TSCode'"
                    v-bind="{ value: details }"
                  />
                </div>
              </TSInject>
            </v-col>
            <v-col :cols="5">
              <TSInject :collapsed="false" :entries-per-line="3">
                <div class="small">
                  <component
                    :is="'TSCode'"
                    v-bind="{ value: details }"
                  />
                </div>
              </TSInject>
            </v-col>
          </v-row>
          <v-row justify="end" class="mt-8">
            <v-col cols="5">
              <div class="text-h3">collapsed: true, entriesPerLine: 1</div>
            </v-col>
            <v-col cols="5">
              <div class="text-h3">collapsed: true, entriesPerLine: 3</div>
            </v-col>
          </v-row>
          <v-row justify="end" no-gutters>
            <v-col cols="5">
              <TSInject :collapsed="true" :entries-per-line="1">
                <div class="small">
                  <component
                    :is="'TSCode'"
                    v-bind="{ value: details }"
                  />
                </div>
              </TSInject>
            </v-col>
            <v-col cols="5">
              <TSInject :collapsed="true" :entries-per-line="3">
                <div class="small">
                  <component
                    :is="'TSCode'"
                    v-bind="{ value: details }"
                  />
                </div>
              </TSInject>
            </v-col>
          </v-row>
        </v-container>
        <!-- </template>
          </VEditor>
        </v-sheet> -->
      </v-main>
      <v-footer app class="flex-grow-0 d-flex justify-center bg-primary">
        <VDependencyInfo />
      </v-footer>
    </v-defaults-provider>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { details } from '@/store/about-me';
import { useDefaults } from './components/defaults';
import TSInject from './components/code/TSInject.vue';

export default defineComponent({
  name: 'App',
  components: { TSInject },
  setup() {
    const theme = ref('code-dark');
    const defaults = useDefaults();
    return { theme, defaults, details };
  },
});
</script>

<style lang="scss">

  .small {
    width: 600px;
    height: 750px;
    overflow: hidden;
    outline: 3px solid green;
    overflow: auto;
    // transform: scale(.5);
  }
  code {
    font-size: 24px !important;
  }

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

</style>
