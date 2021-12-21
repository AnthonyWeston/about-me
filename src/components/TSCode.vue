<template>
  <code>
    <span class="keyword">const</span> <span class="variable-declaration">aweston</span>:
    <span class="type">Developer</span> =
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
  data() {
    return {
      value: {
        name: 'Anthony',
        numbers: [1, '2', { 3: 4 }],
        emptyArray: [],
        emptyObject: {},
        hello: undefined,
        object: { x: 'y' },
      },
    };
  },
});

</script>

<style lang="scss" scoped>
  @use '@/css/styles';

  code {
    color: styles.$default-text-color;
    font-size: 1.2rem;
    font-family: 'Droid Sans Mono', 'Consolas', monospace;
    font-size: 1em;
    line-height: 1.5em;
  }

  .keyword {
    color: styles.$keyword-color;
  }

  .variable-declaration {
    color: styles.$variable-declaration-color;
  }

  .type {
    color: styles.$type-color;
  }
</style>
