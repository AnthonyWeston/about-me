<template>
  <transition name="slide">
    <v-btn
      v-if="show"
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
  </transition>
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
  data() {
    return {
      show: false,
    };
  },
  computed: {
    closeButtonClasses() {
      const classes = 'text-grey align-self-start ml-n3 mt-1 mr-1 elevation-12'.split(' ');
      if (this.pinned) classes.push('pinned');
      return classes;
    },
  },
  mounted() {
    this.show = true;
  },
  methods: {
    close() {
      if (!this.pinned && this.show) {
        this.show = false;
        setTimeout(() => this.$emit('close'), 100);
      }
    },
  },
});
</script>

<style lang="scss" scoped>
  .v-btn {
    text-transform: lowercase;
    font-weight: unset;
    transform-origin: left;
  }

  .v-icon:not(.pinned):hover {
    color: #2196F3 !important;
  }

  $leave-duration: 0.15s;
  $enter-duration: $leave-duration / 2;

  .slide-enter-active {
    transition: transform $enter-duration ease-out;
  }
  .slide-leave-active {
    transition: transform $leave-duration ease-in;
  }

  .slide-enter-to, .slide-leave-from {
    transform: scale(1, 1);
  }

  .slide-enter-from, .slide-leave-to {
    transform: scale(0, 0);
  }
</style>
