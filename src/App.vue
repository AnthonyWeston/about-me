<template>
  <v-app>
    <v-main>
      <TSCode />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TSCode from '@/components/TSCode.vue';

export default defineComponent({
  name: 'App',
  components: {
    TSCode,
  },
});
</script>
