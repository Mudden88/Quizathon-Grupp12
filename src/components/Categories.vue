<script setup>
// Container kan ses som en låda med en etikett på. På lådan står ett namn (category name) och under etiketten sitter ett id-nr. Detta id-nr tas med in i StartQuiz med hjälp av router när vi klickar på en låda och där kan vi använda detta id-nr.
const { title, id } = defineProps({
  title: String,
  id: Number,
});

const emit = defineEmits(["selectCategory"]);

function selectCategory() {
  emit("selectCategory", id);
}
</script>

<template>
  <div
    class="container"
    @click="selectCategory">
    <h2>{{ title }}</h2>
  </div>
</template>

<style scoped>
.container {
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
}
.container:active {
  transform: scale(1.1);
}

h2 {
  color: var(--Light-color);
  font-size: 28px;
}

@media (min-width: 1200px) {
  .container {
    width: 259px;
  }
}
</style>
