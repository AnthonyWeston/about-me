<template>
  <TSTabLink :value="dependenciesLink">
    <template #default="{ click }">
      <v-card
        class="d-flex flex-column align-center bg-secondary elevation-8"
        @click="click"
      >
        <v-card-title>This project was developed using:</v-card-title>
        <div class="d-flex flex-wrap justify-center">
          <VShield
            v-for="dependency in dependencies"
            :key="dependency"
            :dependency="dependency"
          />
        </div>
      </v-card>
    </template>
  </TSTabLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ContentLink } from '@/components/code/content-link';
import { TabSpec } from '@/components/content/tab-spec';

export default defineComponent({
  data: () => ({
    dependencies: ['typescript', 'vue', 'pinia', 'vuetify', '@vue/cli'],
    dependenciesLink: new ContentLink(null, new TabSpec('dependencies.md', 'VDependencies')),
  }),
});

</script>
