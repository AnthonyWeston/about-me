<template>
  <v-card>
    <v-card-header>
      <v-row>
        <v-item-group
          v-model="tabIndex"
          mandatory
          selected-class="custom-selected-tab"
        >
          <v-item
            v-for="(tab, index) in tabs"
            :key="index"
            v-slot="{ selectedClass, toggle }"
          >
            <v-btn
              :class="selectedClass"
              @click="toggle"
            >
              {{ tab.name }}
            </v-btn>
          </v-item>
        </v-item-group>
      </v-row>
    </v-card-header>
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
  computed, defineComponent, PropType, ref,
} from 'vue';

interface TabSpec {
  name: string;
  component: string;
  props?: Record<string, unknown>;
}

export default defineComponent({
  props: {
    tabs: {
      type: Array as PropType<Array<TabSpec>>,
      default: () => [],
    },
  },
  setup(props) {
    const tabIndex = ref(1);
    const selectedTab = computed(() => props.tabs?.[tabIndex.value - 1] ?? {});

    return { tabIndex, selectedTab };
  },
});
</script>

<style lang="scss" scoped>
  .custom-selected-tab {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
