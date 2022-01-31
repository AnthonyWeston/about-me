<template>
  <v-app>
    <v-main>
      <v-container>
        <AboutMe />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutMe from '@/components/content/AboutMe.vue';

export default defineComponent({
  name: 'App',
  components: {
    AboutMe,
  },
});
</script>

<style>
  :root {
    color-scheme: dark;
  }
</style>
