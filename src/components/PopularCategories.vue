<script setup>
import { ref, onMounted } from "vue";
import Categories from "./Categories.vue";
import SectionHeader from "./SectionHeader.vue";
import axios from "axios";

const categories = ref([]);

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function fetchCategories() {
  try {
    const response = await axios.get("https://opentdb.com/api_category.php");
    const shuffledCategories = shuffleArray(response.data.trivia_categories);
    categories.value = shuffledCategories.slice(0, 4);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
}

onMounted(fetchCategories);
</script>

<template>
  <div class="container">
    <SectionHeader header="Popular Categories" />
    <div class="cat-container">
      <Categories
        v-for="category in categories"
        :key="category.id"
        :title="category.name"
      />
    </div>
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

@media (max-width: 750px) {
  .cat-container {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
  }
}
</style>
