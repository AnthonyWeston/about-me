<template>
  <span :class="`depth-mod-${depth % 3}`">{</span>
  <br>
  <template
    v-for="(keyValue, key) in $props.value"
    :key="key"
  >
    <Indent :count="depth + 1" />
    <span class="object-key">{{ `${key}: ` }}</span>
    <TSLiteral
      :value="keyValue"
      :depth="depth + 1"
    />,<br>
  </template>
  <Indent :count="depth" />
  <span :class="`depth-mod-${depth % 3}`">}</span>
</template>

<script lang="ts">

import {
  defineComponent,
  inject,
  provide,
  ref,
} from 'vue';
import Indent from './Indent.vue';

export default defineComponent({
  name: 'TSObject',
  components: { Indent },
  props: {
    value: {
      type: Object,
      required: true,
    },
    depth: {
      type: Number,
      required: true,
      validator: Number.isInteger,
      default: 0,
    },
  },
});

</script>

<style lang="scss">
  @use '@/css/styles';

  .object-key {
    color: styles.$object-key-color;
  }

  .depth-mod-0 {
    color: #ffd700;
  }
  .depth-mod-1 {
    color: #da70d6;
  }
  .depth-mod-2 {
    color: #179fff;
  }
</style>
