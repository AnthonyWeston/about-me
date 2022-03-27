<template>
  <TSTabLink :value="dependenciesLink">
    <template #default="{ click }">
      <VShield
        v-if="compact"
        label="dependencies"
        :message="display.platform.touch ? 'tap here!' : 'click here!'"
        @click="click"
      />
      <v-card
        v-else
        class="d-flex flex-column align-center bg-secondary elevation-8"
        @click="click"
      >
        <v-card-title> This project was developed using: </v-card-title>

        <div
          v-if="!compact"
          class="d-flex flex-wrap justify-center"
        >
          <VShield
            v-for="([dependency, version]) in dependencies"
            :key="dependency"
            :label="dependency"
            :message="version"
          />
        </div>
      </v-card>
    </template>
  </TSTabLink>
</template>

<script lang="ts">
import { ContentLink } from '@/components/code/content-link';
import { TabSpec } from '@/components/content/tab-spec';
import {
  computed,
  defineComponent,
  reactive,
  ref,
} from 'vue';
import { useDisplay } from 'vuetify/lib/framework';
import packageJson from '@/../package.json';
import { useDefaults } from '../defaults';

export default defineComponent({
  setup() {
    const dependencies = ref(['typescript', 'vue', 'pinia', 'vuetify', '@vue/cli']
      .map((dependency) => ([dependency, { ...packageJson.dependencies, ...packageJson.devDependencies }[dependency]])));

    const dependenciesLink = ref(new ContentLink(null, new TabSpec('dependencies.md', 'VDependencies')));

    const compact = computed(() => useDefaults().value.global.density === 'compact');

    return {
      compact,
      dependencies,
      dependenciesLink,
      display: reactive(useDisplay()),
    };
  },
});

</script>
