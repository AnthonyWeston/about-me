<template>
  <TSCode />
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

<style lang="scss">
  @use '@/css/styles';

  body {
    background-color: styles.$background-color;
  }
</style>
