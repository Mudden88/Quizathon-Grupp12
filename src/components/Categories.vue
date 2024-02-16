<script setup>
defineProps({
  title: String,
});
</script>

<template>
  <div class="container">
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
