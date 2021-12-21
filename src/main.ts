import { createApp } from 'vue';
import App from './App.vue';
import TSLiteral from './components/TSLiteral.vue';

const app = createApp(App);
app.component('TSLiteral', TSLiteral);
app.mount('#app');
