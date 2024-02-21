<script setup>
import NavBar from "./components/NavBar.vue";
import AfterQuiz from "./views/AfterQuiz.vue";

import { useStorage } from "./storage";
const fromStorage = useStorage();

</script>

<template>
  <NavBar />
<<<<<<< HEAD
  <Hero />
  <!--
  <PopularCategories /> -->
  <!-- <AllCategories /> -->
=======
>>>>>>> origin/main

  <h1 v-if="fromStorage.user.isLoggedIn">
    Welcome {{ fromStorage.user.username }}!
  </h1>

  <RouterView></RouterView>
</template>
