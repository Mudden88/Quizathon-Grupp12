<script setup>
import { ref } from 'vue'
import { useStorage } from "/src/storage";
const fromStorage = useStorage()

const isLoggedIn = ref(localStorage.getItem("user"))
isLoggedIn.value = JSON.parse(isLoggedIn.value)

const loggedIn = ref(isLoggedIn.value.user.isLoggedIn)

</script>

<template>
  <!-- Att endast visa meddelandet ett visst antal sekunder om användaren är inloggad -->
<h1 v-if="loggedIn">
  Welcome {{ fromStorage.user.username }}!
</h1>
</template>