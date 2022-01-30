<template>
  <v-card>
    <v-container>
      <v-item-group
        v-model="selectedTabIndex"
        mandatory
        selected-class="custom-selected-tab"
        class="d-flex flex-nowrap overflow-x-auto overflow-y-hidden"
      >
        <v-item
          v-for="(tab, index) in tabs"
          :key="index"
          v-slot="{ selectedClass, toggle }"
        >
          <v-btn
            :class="[selectedClass, 'text-subtitle-1', 'pa-0']"
            :ripple="false"
            rounded="0"
            @click="toggle"
          >
            <v-container class="ma-1">{{ tab.name }}</v-container>
            <v-icon
              v-if="index === 0"
              class="disabled text-grey align-self-start ml-n3 mt-1 mr-1 elevation-12"
              icon="mdi-pin"
              size="x-small"
            />
            <v-icon
              v-else
              v-ripple
              class="text-grey align-self-start ml-n3 mt-1 mr-1 elevation-12"
              icon="mdi-close"
              size="x-small"
              @click.stop="closeTab(index)"
            />
          </v-btn>
        </v-item>
      </v-item-group>
    </v-container>
    <v-container>
      <slot
        :component="selectedTab.component"
        :props="selectedTab.props"
      />
    </v-container>
  </v-card>
</template>

<script lang="ts">
/**
 * I'm aware that Vuetify has a VTabs component, but none of
 * the tabs stuff in Vuetify 3 is in the prerelease yet.
 */

import {
  computed, ComputedRef, defineComponent,
} from 'vue';
import { useStore } from 'vuex';
import { key } from '@/store';
import { TabSpec } from './tab-spec';

export default defineComponent({
  setup() {
    const store = useStore(key);

    const tabs: ComputedRef<TabSpec[]> = computed(() => store.state.tabs);
    const selectedTabIndex = computed(() => store.state.selectedTabIndex);
    const selectedTab = computed(() => tabs.value[selectedTabIndex.value]);

    const closeTab = (index: number) => {
      store.commit('closeTab', index);
    };

    return {
      tabs,
      selectedTabIndex,
      selectedTab,
      closeTab,
    };
  },
});
</script>

<style lang="scss" scoped>
  .overflow-x-auto {
    scrollbar-width: 1em;
  }

  .custom-selected-tab {
    background-color: rgba(255, 255, 255, 0.1);
  }

  .v-btn {
    text-transform: lowercase;
    font-weight: unset;
  }

  .v-icon:not(.disabled):hover {
    color: #2196F3 !important;
  }
</style>
