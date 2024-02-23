<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

let userScore = ref(null)

if (userScore.value === null) {
  userScore.value = localStorage.getItem('userScore')
}

</script>

<template>
  <div class="container">
    <h1>Congratulations!</h1>
    <hr>
    <h2>Your score is {{ userScore }}/10</h2>
    <a>
      <RouterLink to="/RandomQuiz">
        <div class="button">Try Again</div>
      </RouterLink>
    </a>
    <span class="textBox">
      <hr class="hr1">Or explore our other quizes
      <hr class="hr2">
    </span>
    <a>
      <RouterLink to="/">
        <div class="guest-btn">Home</div>
      </RouterLink>
    </a>
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

a {
  text-decoration: none;
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

.textBox {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
}

.hr1 {
  margin: 0 10px;
  height: 1px;
  width: 60px;
  justify-self: end;
}

.hr2 {

  margin: 0 10px;
  height: 1px;
  width: 60px;
  justify-self: start;
}
</style>
