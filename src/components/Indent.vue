<template>
  <span class="indent">{{ '  '.repeat(count) }}</span>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style>
  .indent {
    white-space: pre;
  }
</style>
