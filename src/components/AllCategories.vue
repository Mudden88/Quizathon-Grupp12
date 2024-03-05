<script setup>
import { ref, onMounted, computed } from "vue";
import Categories from "./Categories.vue";
import SectionHeader from "./SectionHeader.vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

//Navigera användaren till en ny path med router.push. Tar användaren till ny sida för att kunna välja svårighetsgrad och sen starta quiz.
function handleCategorySelect(categoryId) {
  router.push({ path: `/StartQuiz/${categoryId}` });
}

//Funktion för att hämta alla kategorier, visa fyra åt gången. Klicka på knapp 'show more' för att visa 8 kategorier till. Kör funktion när sidan laddats in.
const categories = ref([]);
const visibleCategories = ref(4);

async function fetchCategories() {
  try {
    const response = await axios.get("https://opentdb.com/api_category.php");
    categories.value = response.data.trivia_categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

function showMoreCategories() {
  visibleCategories.value += 8;
}

const displayedCategories = computed(() =>
  categories.value.slice(0, visibleCategories.value)
);

onMounted(fetchCategories);
</script>

<template>
  <div class="container">
    <SectionHeader header="All Categories" />
    <div
      class="cat-container"
      ref="catContainer">
      <Categories
        v-for="category in displayedCategories"
        :key="category.id"
        :id="category.id"
        :title="category.name"
        @selectCategory="handleCategorySelect" />
    </div>
    <button
      @click="showMoreCategories"
      v-if="visibleCategories < categories.length">
      Show more
    </button>
  </div>
</template>

<style scoped>
.cat-container {
  margin-inline: auto;
  width: 100%;
  display: grid;
  justify-content: center;
  grid-gap: 17px;
  grid-template-columns: repeat(4, 1fr);
}

button {
  margin: 20px auto;
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
  background-color: #debfc7;
}

button:active {
  transform: scale(1.1);
}

@media (max-width: 750px) {
  .cat-container {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
  }
}
</style>
