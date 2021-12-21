<template>
  <span :class="`depth-mod-${depth % 3}`">[</span>
  <br>
  <template
    v-for="(keyValue, key) in $props.value"
    :key="key"
  >
    <Indent :count="depth + 1" />
    <TSLiteral
      :value="keyValue"
      :depth="depth + 1"
    />,<br>
  </template>
  <Indent :count="depth" />
  <span :class="`depth-mod-${depth % 3}`">]</span>
</template>

<script lang="ts">

import {
  defineComponent,
} from 'vue';
import Indent from './Indent.vue';

export default defineComponent({
  name: 'TSArray',
  components: { Indent },
  props: {
    value: {
      type: Array,
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
