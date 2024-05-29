import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import menuFix from "./utils/admin-menu-fix";
const app = createApp(App);
app.use(router);
app.mount("#pluginbase-admin-app");
menuFix("vue-plugin-options");
