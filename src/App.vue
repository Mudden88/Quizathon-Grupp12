<script setup>
import { RouterLink } from "vue-router";
import Hero from "./components/Hero.vue";

import PopularCategories from "./components/PopularCategories.vue";
import AllCategories from "./components/AllCategories.vue";

import NavBar from "./components/NavBar.vue";

import { useStorage } from "./storage";
const fromStorage = useStorage();

</script>

<template>
  <NavBar />
  <Hero />

  <PopularCategories />
  <AllCategories />

  <h1 v-if="fromStorage.user.isLoggedIn">
    Welcome {{ fromStorage.user.username }}!
  </h1>

  <RouterView></RouterView>
</template>
