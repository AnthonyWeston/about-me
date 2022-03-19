<template>
  <TSTabLink :value="dependenciesLink">
    <template #default="{ click }">
      <v-card
        class="d-flex flex-column align-center bg-secondary elevation-8"
        @click="click"
      >
        <v-card-title v-if="display.smAndUp">This project was developed using:</v-card-title>
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
import { defineComponent, reactive, ref } from 'vue';
import { ContentLink } from '@/components/code/content-link';
import { TabSpec } from '@/components/content/tab-spec';
import { useDisplay } from 'vuetify/lib/framework';

export default defineComponent({
  setup() {
    const dependencies = ref(['typescript', 'vue', 'pinia', 'vuetify', '@vue/cli']);
    const dependenciesLink = ref(new ContentLink(null, new TabSpec('dependencies.md', 'VDependencies')));

    return {
      dependencies,
      dependenciesLink,
      display: reactive(useDisplay()),
    };
  },
});

</script>
