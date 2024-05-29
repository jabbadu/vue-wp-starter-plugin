import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { createPinia } from 'pinia';
import { useGeneralStore } from './stores/general.js';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);

// Autoimport store to all components
app.provide('generalStore', useGeneralStore());

app.mount("#pluginbase-frontend-app");
