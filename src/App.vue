<script setup>
import { RouterLink } from "vue-router";
import Hero from './components/Hero.vue'
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <NavBar />
  <Hero />
  <RouterView></RouterView>
</template>
