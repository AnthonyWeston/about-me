import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import TSLiteral from './components/code/TSLiteral.vue';
import { key, store } from './store/store';

loadFonts();

createApp(App).use(store, key)
  .use(vuetify)
  .component('TSLiteral', TSLiteral)
  .mount('#app');
