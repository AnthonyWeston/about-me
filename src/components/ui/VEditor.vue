<template>
  <v-container
    class="d-flex flex-column rounded-lg bg-surface pa-0 elevation-4"
  >
    <div class="tab-bar bg-surface-darken-1 rounded-t-lg d-flex flex-nowrap flex-shrink-0 overflow-x-auto overflow-y-hidden">
      <VEditorTab
        v-for="(tab, index) in tabs"
        :key="tab.id"
        :active="index === selectedTabIndex"
        :name="tab.name"
        :pinned="index === 0"
        @click="selectTab(index)"
        @close="closeTab(index)"
      />
    </div>
    <v-sheet class="overflow-y-auto ma-4 flex-grow-1">
      <slot
        :component="selectedTab.component"
        :props="selectedTab.props"
      />
    </v-sheet>
  </v-container>
</template>

<script lang="ts">
/**
 * I'm aware that Vuetify has a VTabs component, but none of
 * the tabs stuff in Vuetify 3 is in the prerelease yet.
 */

import { useTabStore } from '@/store';
import { storeToRefs } from 'pinia';
import { defineComponent } from 'vue';
import VEditorTab from './VEditorTab.vue';

export default defineComponent({
  setup() {
    const store = useTabStore();

    return {
      selectTab: store.selectTab,
      closeTab: store.closeTab,
      ...storeToRefs(store),
    };
  },
});
</script>

<style lang="scss" scoped>
  .overflow-x-auto {
    scrollbar-width: 1em;
  }

  .v-sheet {
    scrollbar-gutter: stable both-edges
  }

</style>
