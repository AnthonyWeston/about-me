import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

import TSLiteral from './components/TSLiteral.vue';

loadFonts();

createApp(App)
  .use(vuetify)
  .component('TSLiteral', TSLiteral)
  .mount('#app');
