<script setup>
import { RouterLink } from "vue-router";
import Hero from "./components/Hero.vue";
import NavBar from "./components/NavBar.vue";
import LogInView from "./views/LogInView.vue";

import { useStorage } from "./storage";
const fromStorage = useStorage();
console.log(fromStorage.user);
</script>

<template>
  <NavBar />
  <Hero />
  <h1>Hej {{ fromStorage.user.username }}!</h1>
  <RouterView></RouterView>
  <LogInView />
</template>
