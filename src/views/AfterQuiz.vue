<script setup>
import { ref } from 'vue';

const userScore = ref(null)
console.log(userScore.value)
if (userScore.value === null) {
  userScore.value = localStorage.getItem('userScore')
  console.log(userScore.value)
}

</script>

<template>
  <div class="container">
    <h1>Congratulations!</h1>
    <hr>
    <h2>Your score is {{ userScore }}/10</h2>

    <div class="button">Try Again</div>

    <span>
      <hr>
      Or explore out other quizes
      <hr>
    </span>
    <div class="guest-btn">Home</div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.button {
  width: 291px;
  height: 63px;
  border-radius: 20px;
  background-color: var(--Main-lighter-color);
  color: var(--Light-color);
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  margin: .5em 0;
  cursor: pointer;
}

.guest-btn {
  font-size: 1.4rem;
  color: var(--Main-color);
  width: 150px;
  text-align: center;
  padding: 10px;
  border: none;
  border-radius: 13px;
  margin: .5em 0;
  background-color: var(--Accent-color);
  cursor: pointer;

  &:focus {
    outline: 3px solid var(--Accent-color);
  }
}
</style>
