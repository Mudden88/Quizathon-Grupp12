<script setup>

import { useStorage } from '../storage'
import { ref, watch } from 'vue'

const fromStorage = useStorage()
const loggedIn = fromStorage.user.isLoggedIn

watch(loggedIn, (newValue, oldValue) => {
  if (newValue = true) {
  console.log("Hej")
    setTimeout(() => {
      loggedIn.value = false;
    }, 1000);
  }
}) 

</script>

<template>
  <!-- Att endast visa meddelandet ett visst antal sekunder om användaren är inloggad -->
<h1 v-if="loggedIn">
  Welcome {{ fromStorage.user.username }}!
</h1>
</template>