<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

// Använd `useRoute` för att få tillgång till route-parametrar!
const route = useRoute();

// Använda `route.params.categoryId` för att få kategori-ID:t som skickats via URL:en så du kommer åt ID:t för att starta quiz!
const categoryId = route.params.categoryId;

// Funktion för att välja svårighetsgrad
const selectedDifficulty = ref("");

function selectDifficulty(difficulty) {
  selectedDifficulty.value = difficulty;
}

// Kör denna funktion så fort sidan laddats för att hämta namnet på Kategorin. Detta för att kunna ha en container med namnet på kategorin på sidan så man ser vilken kategori som man valde.
async function fetchCategoryName() {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=1&category=${categoryId}`
  );
  const categoryName = response.data.results[0].category;
  console.log("Kategorinamn:", categoryName);
}
// Funktion för att hämta quiz med kategori-id:t och vilken svårighetsgrad som användaren valde
async function startQuiz() {
  const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${selectedDifficulty.value}`;
  const response = await axios.get(url);
  console.log(response.data);
}

onMounted(fetchCategoryName);

console.log("Kategori-ID:", categoryId);
</script>

<template>
  <div>
    <button @click="selectDifficulty('easy')">Easy</button>
    <button @click="selectDifficulty('medium')">Medium</button>
    <button @click="selectDifficulty('hard')">Hard</button>
    <button @click="startQuiz">Start Quiz</button>
  </div>
</template>

<style scoped>
button {
  width: 4rem;
  height: 3rem;
  margin: 10px;
}
</style>
