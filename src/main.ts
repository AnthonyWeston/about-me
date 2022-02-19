import { createApp } from 'vue';
import VPronouns from '@/components/content/VPronouns.md';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import TSLiteral from './components/code/TSLiteral.vue';
import { key, store } from './store/store';
import TSContentLink from './components/code/TSContentLink.vue';

loadFonts();

createApp(App).use(store, key)
  .use(vuetify)
  .component('TSLiteral', TSLiteral)
  .component('TSContentLink', TSContentLink)
  .component('VPronouns', VPronouns)
  .mount('#app');
