<script setup>
import { RouterLink } from "vue-router";
import Hero from "./components/Hero.vue";
import PopularCategories from "./components/PopularCategories.vue";
import AllCategories from "./components/AllCategories.vue";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/page">Page</RouterLink>
  <Hero />
  <PopularCategories />
  <AllCategories />
  <RouterView></RouterView>
</template>
