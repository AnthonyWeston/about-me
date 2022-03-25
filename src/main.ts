import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';

const importComponents = require.context('.', true, /\.(md|vue)$/);

const registerComponents = (app: ReturnType<typeof createApp>): void => {
  importComponents.keys().forEach((filename) => {
    const filenameNoExtension = filename.match(/\/(\w+)(?=\.\w+)/)?.[1];
    if (!filenameNoExtension) throw new RangeError(`Invalid component name ${filename}`);

    const component = importComponents(filename);
    app.component(filenameNoExtension, component.default || component);
  });
};

loadFonts();

const app = createApp(App)
  .use(createPinia())
  .use(vuetify);

registerComponents(app);
app.mount('#app');
