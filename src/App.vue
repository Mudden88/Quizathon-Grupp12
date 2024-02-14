<script setup>
import { RouterLink } from "vue-router";
import Hero from "./components/Hero.vue";
import CategoriesGrid from "./components/CategoriesGrid.vue";
import SectionHeader from "./components/SectionHeader.vue";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/page">Page</RouterLink>
  <Hero />
  <CategoriesGrid />
  <RouterView></RouterView>
</template>
