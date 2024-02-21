<script setup>
import NavBar from "./components/NavBar.vue";
import { useStorage } from "./storage";
const fromStorage = useStorage();

</script>

<template>
  <NavBar />
  <h1 v-if="fromStorage.user.isLoggedIn">
    Welcome {{ fromStorage.user.username }}!
  </h1>

  <RouterView></RouterView>
</template>
