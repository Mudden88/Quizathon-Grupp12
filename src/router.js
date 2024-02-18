import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import PageView from "./views/PageView.vue";
import RandomQuiz from "./views/RandomQuiz.vue"

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
      component: RandomQuiz,
      path: "/randomQuiz"
    },
  ],
});
