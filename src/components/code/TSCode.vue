<template>
  <code>
    <span class="text-export">export </span>
    <span class="text-keyword">const </span>
    <span class="text-variable">aweston </span>:
    <span class="text-type-annotation">Developer</span> =
    <TSLiteral
      :value="value"
    />
  </code>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TSLiteral from './TSLiteral.vue';

export default defineComponent({
  name: 'TSCode',
  components: {
    TSLiteral,
  },
  props: ['value'],
});

</script>

<style lang="scss" scoped>

  div.code-block {
    line-height: 1.5em;

    & :is(span, div) {
      user-select: none;
    }
  }

  code {
    display: block;
  }

</style>
