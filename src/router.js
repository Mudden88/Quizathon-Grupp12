import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import PageView from "./views/PageView.vue";
import StartQuiz from "./components/StartQuiz.vue";

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
      path: "/StartQuiz/:categoryId",
      component: StartQuiz,
      props: true,
    },
  ],
});
