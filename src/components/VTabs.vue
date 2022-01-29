<template>
  <v-card>
    <v-container>
      <v-item-group
        v-model="tabIndex"
        mandatory
        selected-class="custom-selected-tab"
        class="d-flex flex-nowrap overflow-x-auto overflow-y-hidden"
      >
        <v-item
          v-for="(tab, index) in modelValue"
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
              v-if="index > 0"
              v-ripple
              class="text-grey align-self-start ml-n3 mt-1 mr-1 elevation-12"
              icon="mdi-close"
              size="x-small"
              @click.stop="close(index)"
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
  computed, defineComponent, PropType, ref,
} from 'vue';

interface TabSpec {
  name: string;
  component: string;
  props?: Record<string, unknown>;
}

export default defineComponent({
  props: {
    modelValue: {
      type: Array as PropType<Array<TabSpec>>,
      default: () => [],
    },
  },
  emits: ['update:modelValue'],
  setup(props, context) {
    const selectedTabIndex = ref(0);
    const selectedTab = computed(() => props.modelValue?.[selectedTabIndex.value] ?? {});

    const close = (index: number) => {
      const newTabs = [...props.modelValue];
      newTabs.splice(index, 1);
      if (index < selectedTabIndex.value || selectedTabIndex.value === newTabs.length) selectedTabIndex.value -= 1;

      context.emit('update:modelValue', newTabs);
    };

    return {
      tabIndex: selectedTabIndex,
      selectedTab,
      close,
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

  .v-icon:hover {
    color: #2196F3 !important;
  }
</style>
