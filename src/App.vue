<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/page">Page</RouterLink>
  <RouterView></RouterView>
</template>
