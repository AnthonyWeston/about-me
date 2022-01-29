<template>
  <v-card
    theme="dark"
    title="About Me"
    prepend-avatar="rainbow-black-mage.png"
  >
    <v-tabs
      v-model="tabs"
    >
      <template #default="{ component, props }">
        <component
          :is="component"
          v-bind="props"
        />
      </template>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TSCode from '@/components/TSCode.vue';
import VTabs from '@/components/VTabs.vue';

export default defineComponent({
  name: 'AboutMe',
  components: {
    TSCode,
    VTabs,
  },
  data() {
    return {
      tabs: [
        { name: 'about-me.ts', component: 'TSCode', props: {} },
        { name: 'test1.txt', component: 'TSLiteral', props: { value: 'test1' } },
        { name: 'test2.txt', component: 'TSLiteral', props: { value: 'test2' } },
        { name: 'test3.txt', component: 'TSLiteral', props: { value: 'test3' } },
        { name: 'test4.txt', component: 'TSLiteral', props: { value: 'test4' } },
        { name: 'test5.txt', component: 'TSLiteral', props: { value: 'test5' } },
        { name: 'test6.txt', component: 'TSLiteral', props: { value: 'test6' } },
        { name: 'test7.txt', component: 'TSLiteral', props: { value: 'test7' } },
        { name: 'test8.txt', component: 'TSLiteral', props: { value: 'test8' } },
        { name: 'test9.txt', component: 'TSLiteral', props: { value: 'test9' } },
        { name: 'test10.txt', component: 'TSLiteral', props: { value: 'test10' } },
      ],
    };
  },
});
</script>
