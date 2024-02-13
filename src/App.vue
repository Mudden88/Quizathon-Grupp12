<script setup>
import { RouterLink } from "vue-router";
import Hero from './components/Hero.vue'
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/page">Page</RouterLink>
  <Hero />
  <RouterView></RouterView>
</template>
