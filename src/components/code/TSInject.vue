<template>
  <slot />
</template>

<script lang="ts">import { defineComponent, provide } from 'vue';

export default defineComponent({
  props: ['collapsed', 'entriesPerLine'],
  setup(props) {
    provide('collapsed', props.collapsed);
    provide('entriesPerLine', props.entriesPerLine);
  },
});
</script>
