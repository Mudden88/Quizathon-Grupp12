import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import ContactView from "./views/ContactView.vue"
import InstructionsView from "./views/InstructionsView.vue"
import LeaderboardView from "./views/LeaderboardView.vue"
import ProfileView from "./views/ProfileView.vue"

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: ContactView,
      path: "/contact",
    },
    { 
      component: InstructionsView,
      path: "/instructions"
    },
    {
      component: LeaderboardView,
      path: "/leaderboard"
    },
    {
      component: ProfileView,
      path: "/profile"
    }
  ],
});
