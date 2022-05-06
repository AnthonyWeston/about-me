<template>
  <code>
    <span class="text-export">export </span>
    <span class="text-keyword">const </span>
    <span class="text-variable">aweston</span>:
    <span class="text-type-annotation">Developer</span> =
    <TSLiteral
      :value="value"
    />
  </code>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TSCode',
  props: ['value'],
});

</script>

<style lang="scss">
  code {
    display: block;
    white-space: nowrap;
    text-underline-offset: 1px;
  }
</style>
