<script setup>
import NavBar from "./components/NavBar.vue";
import { useStorage } from "./storage";

const fromStorage = useStorage();


</script>

<template>
  <NavBar />
  <RouterView></RouterView>
</template>
