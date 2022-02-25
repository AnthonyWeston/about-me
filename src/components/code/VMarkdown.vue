<template>
  <v-container>
    <component
      :is="componentName"
      :theme="theme"
    />
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'VMarkdown',
  props: {
    componentName: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: null,
    },
  },
});
</script>

<style lang="scss" scoped>
  section:deep * {
    padding: revert;
    margin: revert;

    &:first-child {
      margin-top: 0;
    }
  }
</style>
