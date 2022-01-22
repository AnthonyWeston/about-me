<template>
  <v-app>
    <v-navigation-drawer app />
    <v-app-bar app />
    <v-main>
      <v-container>
        <AboutMe />
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutMe from '@/components/AboutMe.vue';

export default defineComponent({
  name: 'App',
  components: {
    AboutMe,
  },
});
</script>
