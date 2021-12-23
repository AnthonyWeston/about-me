<template>
  <br v-if="!collapsed">
  <span :class="{ collapsed }">
    <Indent
      :collapsed="collapsed"
      :indent="indent"
    />
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Indent from './Indent.vue';

export default defineComponent({
  name: 'TSObjectLine',
  components: {
    Indent,
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
    indent: {
      type: Number,
      default: 0,
    },
  },
  computed: {

  },
});

</script>

<style lang="scss" scoped>
    @use '@/css/styles';

    .string-literal {
      color: styles.$string-color;
    }

    .number-literal {
      color: styles.$number-color;
    }

    .keyword-literal {
      color: styles.$keyword-color;
    }

    .collapsed:v-deep {
      white-space: normal;
    }

    :not(.collapsed):v-deep {
      white-space: pre-wrap;
    }
</style>
