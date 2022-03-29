import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework';

const defaults = computed(() => {
  const display = useDisplay();
  const density:'compact' | 'default' = display.height.value < display.thresholds.value.sm ? 'compact' : 'default';

  return {
    global: {
      density,
    },
  };
});

export const useDefaults = () => defaults;
