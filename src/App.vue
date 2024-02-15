<script setup>
import { RouterLink } from "vue-router";
import Hero from "./components/Hero.vue";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/page">Page</RouterLink>
  <RouterLink to="/logIn">Log In</RouterLink>
  <Hero />
  <RouterView></RouterView>
</template>
