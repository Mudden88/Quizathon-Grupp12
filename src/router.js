import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import StartQuiz from "./components/StartQuiz.vue";
import QuizView from "./views/QuizView.vue";
import LogInView from "./views/LogInView.vue";
import ContactView from "./views/ContactView.vue";
import InstructionsView from "./views/InstructionsView.vue";
import LeaderboardView from "./views/LeaderboardView.vue";
import ProfileView from "./views/ProfileView.vue";
import AfterQuiz from "./views/AfterQuiz.vue";
import RegisterView from "./views/RegisterView.vue";

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
      path: "/instructions",
    },
    {
      component: LeaderboardView,
      path: "/leaderboard",
    },
    {
      component: ProfileView,
      path: "/profile",
    },
    {
      component: QuizView,
      path: "/randomQuiz/:type/:id?/:difficulty?",
    },
    {
      path: "/StartQuiz/:categoryId",
      component: StartQuiz,
      props: true,
    },
    {
      component: AfterQuiz,
      path: "/AfterQuiz",
    },
    {
      component: LogInView,
      path: "/login",
    },
    {
      component: RegisterView,
      path: "/register",
    },
  ],
});
