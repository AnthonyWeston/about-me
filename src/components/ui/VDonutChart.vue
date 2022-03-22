<template>
  <DoughnutChart
    :style="{ height: chartHeight }"
    :chart-data="chartData"
    :options="chartOptions"
  />
</template>

<script lang="ts">
import {
  ArcElement,
  ArcOptions, Chart,
  ChartData,
  ChartOptions,
  DoughnutController, Legend, SubTitle, Title,
} from 'chart.js';
import {
  computed,
  defineComponent, reactive, ref,
} from 'vue';
import { DoughnutChart } from 'vue-chart-3';
import { useDisplay, useLayout, useTheme } from 'vuetify/lib/framework';
import { useNextBreakpoint } from './display';

Chart.register(DoughnutController, ArcElement, Legend, Title, SubTitle);

export default defineComponent({
  name: 'VDonutChart',
  components: { DoughnutChart },
  setup() {
    const minHeight = 400;
    const layout = useLayout();
    console.log(layout);

    const display = useDisplay();

    const orientation = computed((): 'portrait' | 'landscape' => {
      const height = display.height.value - (layout.getLayoutItem('app-bar')?.size ?? 0) * 2;
      return height >= display.width.value ? 'portrait' : 'landscape';
    });

    const chartWidth = computed((): number => { console.log(display.xs.value); return display.xs.value ? display.thresholds.value.sm : display.width.value; });
    const chartHeight = computed((): string => `max(${minHeight}px, ${(display.xs.value ? '65%' : '90%')})`);

    const chartScale = computed((): number => {
      if (display.width.value <= 450) {
        return 0.5;
      } else if (display.xs.value) {
        return 0.65;
      } else if (display.sm.value) {
        return 0.75;
      } else {
        return 1;
      }
    });

    const theme = ref(useTheme());
    const chartTheme = computed(() => theme.value.getTheme('chart'));
    const currentTheme = computed(() => theme.value.getTheme(theme.value.current));

    function scale(options: Record<string, any>, scaleFactor: number) {
      Object.keys(options).forEach((key) => {
        if (typeof options[key] === 'number') {
          options[key] *= scaleFactor;
        } else if (typeof options[key] === 'object') {
          scale(options[key], scaleFactor);
        }
      });

      return options;
    }

    const chartOptions = computed((): ChartOptions<'doughnut'> => scale(({
      // responsive: true,
      aspectRatio: 1,
      maintainAspectRatio: false,
      radius: 150,
      cutout: '10%',
      plugins: {
        title: {
          display: true,
          text: 'Programming/Scripting Languages',
          font: {
            family: 'Roboto',
            size: display.smAndUp.value ? 48 : 36,
            weight: '500',
          },
          color: `${currentTheme.value.colors['on-surface']}d`,
        },
        subtitle: {
          display: true,
          text: 'Relative experience/proficiency',
          color: `${currentTheme.value.colors['on-surface']}d`,
          font: {
            family: 'Roboto',
            size: 24,
            weight: '500',
          },
          padding: {
            bottom: 24,
          },
        },
        legend: {
          position: orientation.value === 'portrait' ? 'bottom' : 'right',
          fullSize: false,
          labels: {
            color: `${currentTheme.value.colors['on-surface']}d`,
            font: {
              family: 'Roboto',
              size: 24,
              weight: '400',
            },
            usePointStyle: true,
            pointStyle: 'rectRounded',
            padding: orientation.value === 'portrait' ? 24 : 16,
          },
        },
      },
    }), chartScale.value));

    const totalYears = 6;
    const data = {
      Java: totalYears,
      'JavaScript/TypeScript': totalYears,
      Bash: 4,
      Python: 2.8,
      Ruby: 2.33,
      'C#': 1.67,
    };

    const options = computed((): Partial<ArcOptions> => ({
      borderJoinStyle: 'miter',
      borderRadius: 4,
      borderColor: currentTheme.value.colors[`surface-${currentTheme.value.dark ? 'darken' : 'lighten'}-1`],
      borderWidth: 4,
    }));

    const chartColors = [
      'primary',
      'secondary',
      'background',
      'surface',
      'warning',
      'error',
    ].reverse();

    const getEmptyOptions = () => ({
      label: '',
      data: [],
      backgroundColor: 'transparent',
      weight: 0.75,
    });

    const getCircumference = (years: number): number => 360 * years / totalYears;

    const getZerosWithSingleOneValue = (length: number, index: number) => {
      const array = new Array(length).fill(0);
      array[index] = 1;
      return array;
    };

    const datasets = computed(() => Object.entries(data)
      .map(([language, years], index, array) => {
        const darkerColors = chartColors.map((color) => chartTheme.value.colors[`${color}-darken-3`]);
        const lighterColors = chartColors.map((color) => chartTheme.value.colors[`${color}-darken-1`]);
        const backgroundColor = currentTheme.value.dark ? darkerColors : lighterColors;
        const borderColor = currentTheme.value.dark ? lighterColors : darkerColors;

        let label;
        if (display.xs.value || orientation.value === 'portrait') {
          label = language;
        } else {
          const languages = Object.keys(data);
          let longestName = languages[0];
          languages.forEach((l) => { if (l.length > longestName.length) longestName = l; });

          const padMultiplier = display.thresholds.value[display.name.value] / display.thresholds.value.sm;
          label = language.padEnd(longestName.length * padMultiplier, ' ');
        }

        return {
          label,
          data: getZerosWithSingleOneValue(array.length, index),
          circumference: getCircumference(years),
          backgroundColor,
          stacked: true,
          ...options.value,
          borderColor,
        };
      })
      .map((dataset) => ([dataset, getEmptyOptions()]))
      .flat());

    const chartData = computed(():ChartData<'doughnut'> => ({
      datasets: datasets.value,
      labels: datasets.value.filter((dataset) => dataset.label).map((dataset) => [dataset.label]),
    }));
    console.log(chartTheme.value);
    console.log(display);
    return {
      chartData,
      chartOptions,
      chartWidth,
      chartHeight,
      display: reactive(display),
      chartScale,
    };
  },
});

</script>
