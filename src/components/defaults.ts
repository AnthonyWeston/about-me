import { computed } from 'vue';
import { useDisplay } from 'vuetify/lib/framework';

const defaults = computed(() => {
  const display = useDisplay();
  const orientation = computed(() => (display.height.value >= display.width.value ? 'portrait' : 'landscape'));

  return {
    global: {
      density: display.smAndDown.value && orientation.value === 'landscape' ? 'compact' : 'default' as 'compact' | 'default',
    },
  };
});

export const useDefaults = () => defaults;
