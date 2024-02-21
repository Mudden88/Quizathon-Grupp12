<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import ConfirmButton from "../components/ConfirmButton.vue";
import { useRoute } from "vue-router";

const apiUrl = "https://opentdb.com/api.php?amount=10";
const questions = ref([]);
const currentIndex = ref(0);
const selectedAnswerIndex = ref(null);
const currentScore = ref(0);
const router = useRoute();

const shuffledAnswers = computed(() => {
  if (
    questions.value.length > 0 &&
    currentIndex.value < questions.value.length
  ) {
    const question = questions.value[currentIndex.value];
    const answers = [...question.incorrect_answers, question.correct_answer];
    shuffleArray(answers);

    return answers;
  }
  return [];
});

//function för att hämta quiz och lagra i questions arrayen
async function fetchData() {
  let response = await axios.get(apiUrl);

  questions.value = response.data.results;

  return questions;
}
//function för att blanda array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// tar emot index från svaren och tilldelar index som värde för att kunna hantera vilket svar som är klickat på.
function answerOnClick(index) {
  selectedAnswerIndex.value = index;
}

//Öka siffra efter varje fråga
function newIndex() {
  currentIndex.value += 1;
  selectedAnswerIndex.value = null;
  correctAnswerIndex.value = null;
  userAnswerCorrect.value = null;
}

function getNewIndex() {
  if (currentIndex.value != 10) {
    selectedAnswerIndex.value = null;
    newIndex();
  } else {
    router.push("/");
  }
}
//Logik för knappen, är svaret rätt. ökas currentScore,
//selectedAnswerIndex.value som fått ett index från functionen innan får
// Null för att släcka Pop-color
//Om currentIndex är 10 skickas man tillbaka till home,
//annars får den ett nytt index och ny fråga dyker upp.
const correctAnswerIndex = ref(null);
const userAnswerCorrect = ref(null);

function confirmClick() {
  const question = questions.value[currentIndex.value];
  const selectedAnswer = shuffledAnswers.value[selectedAnswerIndex.value];
  const correctIndex = shuffledAnswers.value.findIndex(
    (answer) => answer === question.correct_answer
  );

  correctAnswerIndex.value = correctIndex;

  if (selectedAnswer === question.correct_answer) {
    currentScore.value += 1;
    setScore();
    userAnswerCorrect.value = true;
  } else {
    console.log(
      selectedAnswer,
      "is incorrect. Correct answer is ",
      question.correct_answer
    );
    userAnswerCorrect.value = false;
  }
}

function setScore() {
  localStorage.setItem("userScore", currentScore.value);
}

function clearScore() {
  localStorage.removeItem("userScore");
}

function getScore() {
  console.log("Get score:", localStorage.getItem("userScore"));
}

fetchData();
clearScore();
</script>

<template>
  <div class="container">
    <ul v-if="questions.length > 0">
      <li v-for="(question, index) in questions" :key="question.question">
        <div class="check-index" v-if="index === currentIndex">
          <p>
            Question: {{ index + 1 }}/10
            <span class="difficulty" v-html="question.difficulty"></span>
          </p>
          <p class="category">
            Category: <span v-html="question.category"></span>
          </p>
          <p class="currentScore">Score: {{ currentScore }} /10</p>
          <hr />
          <p class="main-question" v-html="question.question"></p>
          <div class="answer-container">
            <p
              id="answer"
              v-for="(answer, answerIndex) in shuffledAnswers"
              :key="answer"
              :class="{
                selected: answerIndex === selectedAnswerIndex,
                'correct-answer':
                  correctAnswerIndex === answerIndex &&
                  userAnswerCorrect !== null,
                'wrong-answer':
                  selectedAnswerIndex === answerIndex &&
                  userAnswerCorrect === false,
                'correct-unselected':
                  correctAnswerIndex === answerIndex &&
                  userAnswerCorrect === false,
              }"
              @click="() => answerOnClick(answerIndex)"
              v-html="answer"
            ></p>
          </div>
          <ConfirmButton @Confirm="confirmClick" @nextquestion="getNewIndex" />
        </div>
      </li>
    </ul>

    <p v-else>Loading question...</p>
  </div>
</template>

<style scoped>
.container {
  width: 390px;
  text-align: center;
}

ul {
  list-style-type: none;
}

hr {
  width: 338px;
  margin-left: 0;
  margin-top: 12px;
  border: 1px solid var(--Main-color);
  margin-bottom: 12px;
  border-radius: 6px;
}

p {
  font-size: 32px;
  margin: 0;
}

.main-question {
  color: var(--Main-color);
}

h3 {
  font-size: 30px;
}

.check-index {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.answer-container {
  display: flex;
  flex-direction: column;
  margin-top: 6px;
}

#answer {
  width: 321px;
  min-height: 63px;
  background-color: var(--Accent-color);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  font-size: 36px;
}

#answer:hover {
  background-color: var(--Pop-color);
}

#answer:active {
  transform: scale(1.1);
}

#answer.selected {
  background-color: var(--Pop-color);
  box-shadow: 6px 5px 5px rgba(45, 78, 72, 0.25);
}

.difficulty {
  font-size: 20px;
  color: var(--Accent-color);
}

.currentScore {
  background-color: var(--Pop-color);
  width: fit-content;
  padding: 0 10px;
  border-radius: 10px;
  margin: auto;
  margin-top: 8px;
}

.category {
  font-size: 25px;
  margin-top: 6px;
}

.correct-answer {
  border: 6px solid var(--Main-color);
}

.wrong-answer {
  border: 6px solid #872e2e;
}

.correct-unselected {
  border: 6px solid var(--Main-lighter-color);
}

@media (min-width: 900px) {
  .answer-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
  .container {
    width: 100%;
  }
}
</style>
