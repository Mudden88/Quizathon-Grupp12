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
}

onMounted(fetchCategoryName);
</script>

<template>
  <div class="cat-name-container">
    <div class="blur">{{ categoryName }}</div>
  </div>
  <p class="instructions">
    Select a difficulty or click Start Quiz for a mix of easy, medium and hard
    questions
  </p>
  <hr />
  <div class="container">
    <button @click="selectDifficulty('easy')">Easy</button>
    <button @click="selectDifficulty('medium')">Medium</button>
    <button @click="selectDifficulty('hard')">Hard</button>
  </div>
  <RouterLink :to="`/Quiz/category/${categoryId}/${selectedDifficulty}`">
    <a>
      <button class="start-quiz-btn">Start Quiz</button>
    </a>
  </RouterLink>
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

.blur {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 170px;
  height: 96px;
  backdrop-filter: blur(3px);
  border-radius: 20px;
  box-shadow: 2px 2px 9px #426c6470;
  cursor: pointer;
}
.cat-name-container {
  background-color: var(--Main-lighter-color);
  background-image: url(../assets/pattern.png);
  background-size: contain;
  width: 338px;
  height: 214px;
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
  margin-bottom: 25px;
}

.instructions {
  font-size: 18px;
  color: var(--Dark-color);
  width: 300px;
  text-align: center;
}

a {
  text-decoration: none;
}

hr {
  border: 1px solid var(--Main-color);
  margin-top: 12px;
  border-radius: 6px;
  width: 250px;
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

button:hover {
  background-color: #daafba;
}

button:active {
  transform: scale(1.1);
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

@media (min-width: 800px) {
  .cat-name-container {
    width: 600px;
    height: 300px;
    font-size: 48px;
  }
  .blur {
    width: 300px;
    height: 200px;
  }

  .instructions {
    font-size: 26px;
    width: 450px;
  }

  hr {
    width: 350px;
  }
}
</style>
