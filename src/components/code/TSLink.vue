<template>
  <a>
    <v-icon :icon="icon" size="1ch" /><span>&nbsp;</span>
    <slot :attrs="{ class: 'link' }" />
  </a>
</template>

<script lang="ts">
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
  .v-icon {
    font-size: 1em !important;
  }
</style>

<style>
  .link .primitive-value {
    text-decoration: underline;
  }
</style>
