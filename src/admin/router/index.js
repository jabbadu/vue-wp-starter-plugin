import Home from "admin/pages/Home.vue";
import Options from "admin/pages/Options.vue";
import { createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/options",
      name: "Options",
      component: Options,
    },
  ],
});

export default router;