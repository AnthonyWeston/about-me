<template>
  <transition name="slide">
    <v-btn
      v-if="show"
      color="secondary"
      :class="['v-tab','text-subtitle-1', 'pa-0', 'rounded-t-lg', active ? '' : 'inactive']"
      density="default"
      :ripple="false"
      rounded="0"
    >
      <v-container :class="['ma-1', active ? '' : 'text-grey-lighten-1']">{{ name }}</v-container>
      <v-icon
        :v-ripple="!pinned"
        :color="active ? 'on-secondary' : 'grey-lighten-1'"
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
    active: {
      type: Boolean,
      default: false,
    },
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
      const classes = 'align-self-start ml-n3 mt-1 mr-1'.split(' ');
      // const classes = 'align-self-start ml-n3 mt-1 mr-1'.split(' ');
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
  .v-tab {
    text-transform: lowercase;
    font-weight: unset;
    transform-origin: left;
    transition: all 0.15s ease;
  }

  .slide-enter-to, .slide-leave-from {
    transform: scale(1, 1);
  }

  .slide-enter-from, .slide-leave-to {
    transform: scale(0, 0);
  }

  .v-icon:not(.pinned):hover {
    color: #2196F3 !important;
  }

  .inactive {
    opacity: 87%
  }
</style>
