<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import ConfirmButton from "../components/ConfirmButton.vue";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
import { update, onValue, ref as dbref } from "firebase/database";
import { db, usersRef } from "../firebase";

const url = ref("");
const route = useRoute();

const difficulty = route.params.difficulty;
const id = route.params.id;

const questions = ref([]);
const currentIndex = ref(0);
const selectedAnswerIndex = ref(null);
const currentScore = ref(0);
const router = useRouter();
const emit = defineEmits(["changedisabled"]);
const disabledButton = ref(true);
const disableAnswers = ref(false); //ta bort, används ej

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
  if (route.params.type === "random") {
    url.value = "https://opentdb.com/api.php?amount=10";
  } else {
    url.value = `https://opentdb.com/api.php?amount=10&category=${id}&difficulty=${difficulty}`;
  }

  //Kod för att lagra Quiz-inställningarna i localstorage -->
  const quizSettings = {
    type: route.params.type,
    categoryId: id,
    difficulty: difficulty,
  };
  localStorage.setItem("quizSettings", JSON.stringify(quizSettings));
  // <--
  let response = await axios.get(url.value);
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
//Git-Ellen fixade disable button
function answerOnClick(index) {
  selectedAnswerIndex.value = index;
  disabledButton.value = false;
}

// Funktion som lägger till poäng till firebase
const user = ref(JSON.parse(localStorage.getItem("user"))),
  username = ref(user.value.user.username),
  userScore = ref(JSON.parse(localStorage.getItem("userScore"))),
  data = ref(null),
  oldScore = ref(null),
  totalScore = ref(null);

onValue(usersRef, (snapshot) => {
  data.value = snapshot.val();
  oldScore.value = data.value[username.value].totalscore;
});

function setTotalScore() {
  totalScore.value = oldScore.value + userScore.value;

  const updates = {};
  updates[`/users/${username.value}/totalscore`] = totalScore.value;

  return update(dbref(db), updates);
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
    disabledButton.value = true;
    isDisabled.value = false;
    newIndex();
  }
  if (currentIndex.value === 10) {
    router.push("/AfterQuiz");
    setTotalScore();
  }
}
//Logik för knappen, är svaret rätt. ökas currentScore,
//selectedAnswerIndex.value som fått ett index från functionen innan får
// Null för att släcka Pop-color
//Om currentIndex är 10 skickas man tillbaka till home,
//annars får den ett nytt index och ny fråga dyker upp.
const correctAnswerIndex = ref(null);
const userAnswerCorrect = ref(null);
const isDisabled = ref(false); // Svarsalternativen blir disabled efter tryck på confirm.

function confirmClick() {
  const question = questions.value[currentIndex.value];
  const selectedAnswer = shuffledAnswers.value[selectedAnswerIndex.value];
  const correctIndex = shuffledAnswers.value.findIndex(
    (answer) => answer === question.correct_answer
  );

  correctAnswerIndex.value = correctIndex;
  isDisabled.value = true;

  if (selectedAnswer === question.correct_answer) {
    currentScore.value += 1;
    setScore();
    userAnswerCorrect.value = true;
  } else {
    userAnswerCorrect.value = false;
  }
}

function setScore() {
  localStorage.setItem("userScore", currentScore.value);
}

function clearScore() {
  localStorage.removeItem("userScore");
}
setTimeout(fetchData, 3000);
// fetchData();
clearScore();
</script>

<template>
  <div class="container">
    <ul v-if="questions.length > 0">
      <li
        v-for="(question, index) in questions"
        :key="question.question">
        <div
          class="check-index"
          v-if="index === currentIndex">
          <p>
            Question: {{ index + 1 }}/10
            <span
              class="difficulty"
              v-html="question.difficulty"></span>
          </p>
          <p class="category">
            Category: <span v-html="question.category"></span>
          </p>
          <p class="currentScore">Score: {{ currentScore }} /10</p>
          <hr />
          <p
            class="main-question"
            v-html="question.question"></p>
          <div class="answer-container">
            <button
              id="answer"
              v-for="(answer, answerIndex) in shuffledAnswers"
              :key="answer"
              :disabled="isDisabled"
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
              v-html="answer"></button>
          </div>
          <ConfirmButton
            :disabledButton="disabledButton"
            @Confirm="confirmClick"
            @nextquestion="getNewIndex" />
        </div>
      </li>
    </ul>

    <p
      class="loading"
      v-else>
      Loading question...
    </p>
  </div>
</template>

<style scoped>
.loading {
  text-align: center;
  margin-top: 3em;
}

.container {
  width: 390px;
  margin-top: 10px;
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
  color: var(--Dark-color);
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
  padding: 10px;
  outline: 0;
  border: none;
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

#answer:disabled {
  background-color: var(--Accent-color);
  cursor: default;
  transform: none;
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
  background-color: var(--Main-color) !important;
  color: white;
}

.wrong-answer {
  background-color: var(--Error-color) !important;
  color: white;
}

.correct-unselected {
  background-color: var(--Main-color) !important;
  color: white;
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
