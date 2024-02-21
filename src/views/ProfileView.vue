<script setup>
import { useStorage } from "../storage";
const fromStorage = useStorage();

function logOut() {
  fromStorage.user = {
    username: null,
    isLoggedIn: false,
    score: null,
  };
}
</script>

<template>
  <p>Profile</p>
  <button @click="logOut">Log out</button>
</template>
