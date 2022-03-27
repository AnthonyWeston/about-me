<template>
  <img
    class="ma-2"
    :alt="`Shields.io badge: ${label}@${message}`"
    :src="`https://img.shields.io/badge/${label}-${escapedMessage}-blue`"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VShield',
  props: {
    label: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  computed: {
    escapedMessage(): string {
      return this.message.replaceAll('-', '--').replaceAll('_', '__');
    },
  },
});
</script>
