<template>
  <v-sheet class="v-tabs d-flex flex-column">
    <div class="tab-bar d-flex flex-nowrap flex-shrink-0 overflow-x-auto overflow-y-hidden">
      <VTab
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :class="tabClasses(index)"
        :name="tab.name"
        :pinned="index === 0"
        @click="selectTab(index)"
        @close="closeTab(index)"
      />
    </div>
    <v-sheet class="overflow-y-auto ma-4">
      <slot
        :component="selectedTab.component"
        :props="selectedTab.props"
      />
    </v-sheet>
  </v-sheet>
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

    const tabClasses = (index: number) => ({
      'active-tab': index === selectedTabIndex.value,
    });

    const selectTab = (index: number) => {
      store.commit('selectTab', index);
    };

    const closeTab = (index: number) => {
      store.commit('closeTab', index);
    };

    return {
      tabs,
      selectedTab,
      tabClasses,
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

  .tab-bar {
    background-color: rgb(0, 0, 0, .3) !important;

    > * {
      background-color: rgb(33, 33, 33) !important;
    }

    > :not(.active-tab) {
      background-color: rgb(42, 42, 42) !important;
      color: gray !important;
    }
  }

</style>
