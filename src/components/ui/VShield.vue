<template>
  <img
    class="ma-2"
    :alt="`Shields.io badge: ${dependency}@${version}`"
    :src="url"
  >
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { dependencies, devDependencies } from '@/../package.json';

export default defineComponent({
  name: 'VShield',
  props: {
    dependency: {
      type: String as PropType<keyof typeof dependencies | keyof typeof devDependencies>,
      required: true,
    },
  },
  computed: {
    isDevDependency(): boolean {
      return this.dependency in devDependencies;
    },
    version(): string {
      return { ...dependencies, ...devDependencies }[this.dependency];
    },
    url(): string {
      return this.isDevDependency
        ? `https://img.shields.io/github/package-json/dependency-version/AnthonyWeston/about-me/dev/${this.dependency}`
        : `https://img.shields.io/github/package-json/dependency-version/AnthonyWeston/about-me/${this.dependency}`;
    },
  },
});
</script>
