<template>
  <span :class="`depth-mod-${depth % 3}`">{{ openBracket }}</span>
  <div :class="{ 'object-lines': true, inline }">
    <template
      v-for="(key, index) in Object.keys(value)"
      :key="key"
    >
      <div
        class="object-content"
      >
        <span
          v-if="!Array.isArray(value)"
          class="object-key"
        >{{ `${key}:` }}&nbsp;</span>
        <TSLiteral
          :value="value[key]"
          :depth="depth + 1"
        /><template v-if="!(inline &&index === Object.keys(value).length - 1)">,</template>
      </div>
    </template>
  </div>
  <span :class="`depth-mod-${depth % 3}`">{{ closeBracket }}</span>
</template>

<script lang="ts">

import {
  defineComponent,
} from 'vue';

export default defineComponent({
  name: 'TSObject',
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
  computed: {
    inline() {
      return Object.keys(this.value).length <= 2;
    },
    openBracket() {
      return Array.isArray(this.value) ? '[' : '{';
    },
    closeBracket() {
      return Array.isArray(this.value) ? ']' : '}';
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

  .object-lines {
    margin: 0 2ch;
    display: flow-root;

    &.inline {
      margin: 0;
      display: inline;

      .object-content {
        display: inline;
        margin-left: 1ch;

        &:last-of-type {
          margin-right: 1ch;
        }
      }
    }
  }
</style>
