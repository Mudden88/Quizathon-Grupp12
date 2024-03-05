<script setup>
defineProps({
  header: String,
});
</script>

<template>
  <h2>{{ header }}</h2>
  <hr />
</template>

<style scoped>
h2 {
  margin-top: 40px;
  margin-bottom: 10px;
  color: var(--Dark-color);
  font-size: 30px;
}

hr {
  border: 1px solid var(--Main-color);
  margin-bottom: 12px;
  border-radius: 6px;
}
</style>
