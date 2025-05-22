import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ui from '@nuxt/ui/vue-plugin';

import App from './App.vue';
import router from './router';

import i18n from './plugins/i18n/config';
import setInitData from './plugins/setInitData';

const app = createApp(App);

const pinia = createPinia();

app.use(i18n);
app.use(pinia);
app.use(router);
app.use(ui);
app.use(setInitData);
app.mount('#app');
