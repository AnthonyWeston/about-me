import { useDisplay } from 'vuetify/lib/framework';
import type { DisplayThresholds } from 'vuetify';
import { computed } from 'vue';

export const useNextBreakpoint = () => {
  const display = useDisplay();

  const orderedBreakpoints: Array<keyof DisplayThresholds> = (Object.entries(display.thresholds.value) as [[keyof DisplayThresholds, number]])
    .sort(([_breakpoint1, threshold1], [_breakpoint2, threshold2]) => threshold1 - threshold2)
    .map(([breakpoint]) => breakpoint);

  return computed((): keyof DisplayThresholds =>
    orderedBreakpoints[Math.min(orderedBreakpoints.length - 1, orderedBreakpoints.indexOf(display.name.value) + 1)]);
};
