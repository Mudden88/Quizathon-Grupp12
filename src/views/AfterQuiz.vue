<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import ConfettiExplosion from "vue-confetti-explosion";

let userScore = ref(null);
const scoreMessage = ref("");

if (userScore.value === null) {
  userScore.value = Number(localStorage.getItem("userScore"));
}

// Meddelanden beroende på hur det går på Quizzet -->
if (userScore.value === 0) {
  scoreMessage.value = "That didn't go too well, try again!";
} else if (userScore.value >= 1 && userScore.value <= 3) {
  scoreMessage.value = "Good effort! But you can do better.";
} else if (userScore.value >= 4 && userScore.value <= 6) {
  scoreMessage.value = "Not bad at all, you're getting there!";
} else if (userScore.value >= 7 && userScore.value <= 9) {
  scoreMessage.value = "Great job! You're almost at the top!";
} else if (userScore.value === 10) {
  scoreMessage.value = "Perfect score! Congratulations!";
}
// <--

// Hämta quizSettings från localStorage och kör funktion playAgain när användaren klickar på "Play Again".
const savedSettings = JSON.parse(localStorage.getItem("quizSettings"));
const router = useRouter();

function playAgain() {
  let playAgainUrl;
  if (savedSettings.type === "random") {
    playAgainUrl = "/Quiz/random";
  } else {
    playAgainUrl = `/Quiz/category/${savedSettings.categoryId}/${savedSettings.difficulty}`;
  }
  router.push(playAgainUrl);
}
</script>

<template>
  <div class="container">
    <h1>{{ scoreMessage }}</h1>
    <ConfettiExplosion
      :particleCount="2000"
      :force="0.8"
      :stageHeight="1000"
      :stageWidth="1200" />
    <hr />
    <h2>Your score is {{ userScore }}/10</h2>
    <button @click="playAgain">Play Again</button>
    <span class="textBox">
      <hr class="hr1" />
      Or explore our other quizes
      <hr class="hr2" />
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

button {
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
  margin: 0.5em 0;
  cursor: pointer;
  border-style: none;
}

h1 {
  margin-top: 7rem;
}

h2 {
  margin-top: 0.5rem;
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
  margin: 0.5em 0;
  background-color: var(--Accent-color);
  cursor: pointer;

  &:focus {
    outline: 3px solid var(--Accent-color);
  }

  &:active {
    transform: scale(1.1);
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
