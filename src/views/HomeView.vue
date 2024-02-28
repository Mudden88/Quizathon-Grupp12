<script setup>

import { ref } from 'vue'
import { useStorage } from '../storage'
import PopularCategories from '../components/PopularCategories.vue'
import AllCategories from "../components/AllCategories.vue";
import Hero from "../components/Hero.vue"
import WelcomeText from "../components/WelcomeText.vue";

const fromStorage = useStorage(),
props = defineProps(['showMessage']),
showMessage = ref(true)

// function loggedIn() {
//   showMessage.value = true
//   console.log("Hej")
//   setTimeout(() => {
//       showMessage.value = false;
//     }, 1000);

//   return showMessage.value
// }

</script>


<template>
   <WelcomeText :show-message="showMessage" />
  <Hero />

  <PopularCategories />
  <AllCategories />
</template>
