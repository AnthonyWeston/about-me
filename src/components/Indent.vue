<template>
  <span :class="{ indent: true, collapsed }">{{ '  '.repeat(indent) }}</span>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    indent: {
      type: Number,
      required: true,
    },
    collapsed: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style>
  .indent:not(.collapsed) {
    white-space: pre;
  }
</style>
