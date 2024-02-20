<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

defineOptions({
  inheritAttrs: false,
});

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
const categoryName = ref("");

async function fetchCategoryName() {
  const response = await axios.get(
    `https://opentdb.com/api.php?amount=1&category=${categoryId}`
  );
  categoryName.value = response.data.results[0].category;
  console.log("Kategorinamn:", categoryName.value);
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
  <div class="cat-name-container">{{ categoryName }}</div>
  <div class="container">
    <button @click="selectDifficulty('easy')">Easy</button>
    <button @click="selectDifficulty('medium')">Medium</button>
    <button @click="selectDifficulty('hard')">Hard</button>
  </div>
  <button class="start-quiz-btn" @click="startQuiz">Start Quiz</button>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  gap: 10px;
}
.cat-name-container {
  background-color: var(--Main-lighter-color);
  width: 156px;
  height: 133px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 7px;
  box-shadow: 6px 5px 5px rgba(45, 78, 72, 0.25);
  cursor: pointer;
  color: var(--Light-color);
  font-size: 28px;
}

button {
  margin: 20px 0 2px 0;
  display: block;
  padding: 0.7rem;
  font-size: 22px;
  color: var(--Main-color);
  border-radius: 13px;
  background-color: var(--Accent-color);
  border: none;
  cursor: pointer;
}

button:focus {
  background-color: #daafba;
}

.start-quiz-btn {
  background-color: var(--Main-lighter-color);
  color: white;
}

.start-quiz-btn:hover {
  background-color: var(--Main-color);
}

.start-quiz-btn:focus {
  background-color: var(--Main-color);
}

@media (min-width: 1200px) {
  .cat-name-container {
    width: 259px;
  }
}
</style>
