<template>
  <span>{{ "\u00A0".repeat(tabs * 2) }}</span>
</template>

<script lang="ts">import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    tabs: {
      type: Number,
      required: true,
    },
  },
});

</script>
