<template>
  <TSContentLink :value="dependenciesLink">
    <template #default="{ click }">
      <v-card
        class="d-flex flex-column align-center"
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
  </TSContentLink>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ContentLink } from '@/components/code/content-link';
import { TabSpec } from '@/components/ui/tab-spec';

export default defineComponent({
  data: () => ({
    dependencies: ['typescript', 'vue', 'pinia', 'vuetify', '@vue/cli'],
    dependenciesLink: new ContentLink(null, new TabSpec('architecture.md', 'VMarkdown', { componentName: 'VArchitecture' })),
  }),
});

</script>
