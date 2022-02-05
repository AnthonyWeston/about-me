<template>
  <div class="code-block">
    <code>
      <span class="keyword">const</span> <span class="variable-declaration">aweston</span>:
      <span class="type">Developer</span> =
      <TSLiteral
        :value="value"
      />
    </code>
  </div>
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
  @use '@/css/styles';

  div.code-block {
    color: styles.$default-text-color;

    line-height: 1.5em;

    & :is(span, div) {
      user-select: none;
    }
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
