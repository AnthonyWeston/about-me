<template>
  <v-btn
    :class="['text-subtitle-1', 'pa-0']"
    :ripple="false"
    rounded="0"
  >
    <v-container class="ma-1">{{ name }}</v-container>
    <v-icon
      :v-ripple="!pinned"
      :class="closeButtonClasses"
      :icon="pinned ? 'mdi-pin' : 'mdi-close'"
      size="x-small"
      @click.stop="close"
    />
  </v-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    pinned: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['close'],
  computed: {
    closeButtonClasses() {
      const classes = 'text-grey align-self-start ml-n3 mt-1 mr-1 elevation-12'.split(' ');
      if (this.pinned) classes.push('pinned');
      return classes;
    },
  },
  methods: {
    close() {
      if (!this.pinned) this.$emit('close');
    },
  },
});
</script>

<style lang="scss" scoped>

  .v-btn {
    text-transform: lowercase;
    font-weight: unset;
  }

  .v-icon:not(.pinned):hover {
    color: #2196F3 !important;
  }
</style>
