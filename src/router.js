import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import PageView from "./views/PageView.vue";
import LogInView from "./views/LogInView.vue";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: PageView,
      path: "/page",
    },
    {
      component: LogInView,
      path: "/logIn",
    },
  ],
});
