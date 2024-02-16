<script setup>
import { ref, onMounted, computed } from "vue";
import Categories from "./Categories.vue";
import SectionHeader from "./SectionHeader.vue";
import axios from "axios";

const categories = ref([]);
const visibleCategories = ref(4);

async function fetchCategories() {
  try {
    const response = await axios.get("https://opentdb.com/api_category.php");
    categories.value = response.data.trivia_categories;
    console.log(categories.value);
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
    <div class="cat-container" ref="catContainer">
      <Categories
        v-for="category in displayedCategories"
        :key="category.id"
        :title="category.name"
      />
    </div>
    <button
      @click="showMoreCategories"
      v-if="visibleCategories < categories.length"
    >
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
  /* box-shadow: 3px 3px 3px rgba(45, 78, 72, 0.25); */
}

button:hover {
  background-color: #debfc7;
}

@media (max-width: 750px) {
  .cat-container {
    grid-template-columns: repeat(2, 1fr);
    max-width: 100%;
  }
}
</style>
