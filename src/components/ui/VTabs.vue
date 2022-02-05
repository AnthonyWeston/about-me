<template>
  <v-card flat>
    <v-container
      class="d-flex flex-nowrap overflow-x-auto overflow-y-hidden"
    >
      <VTab
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :class="selectedClass(index)"
        :name="tab.name"
        :pinned="index === 0"
        @click="selectTab(index)"
        @close="closeTab(index)"
      />
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
import VTab from './VTab.vue';

export default defineComponent({
  components: {
    VTab,
  },
  setup() {
    const store = useStore(key);

    const tabs: ComputedRef<TabSpec[]> = computed(() => store.state.tabs);
    const selectedTabIndex = computed(() => store.state.selectedTabIndex);
    const selectedTab = computed(() => tabs.value[selectedTabIndex.value]);

    const selectedClass = (index: number) => (index === selectedTabIndex.value ? 'selected-tab' : '');

    const selectTab = (index: number) => {
      store.commit('selectTab', index);
    };

    const closeTab = (index: number) => {
      store.commit('closeTab', index);
    };

    return {
      tabs,
      selectedTabIndex,
      selectedTab,
      selectedClass,
      selectTab,
      closeTab,
    };
  },
});
</script>

<style lang="scss" scoped>
  .overflow-x-auto {
    scrollbar-width: 1em;
  }

  .selected-tab {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
