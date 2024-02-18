<script setup>
import axios from 'axios'
import { onMounted, ref, computed } from 'vue'

const apiUrl = 'https://opentdb.com/api.php?amount=10'
const questions = ref([])
const currentIndex = ref(0)
const selectedAnswerIndex = ref(null)
const currentScore = ref(0)

const shuffledAnswers = computed(() => {
  if (questions.value.length > 0 && currentIndex.value < questions.value.length) {
    const question = questions.value[currentIndex.value]
    const answers = [...question.incorrect_answers, question.correct_answer]
    shuffleArray(answers)

    return answers
  }
  return []
})

async function fetchData() {
  let response = await axios.get(apiUrl)

  questions.value = response.data.results

  return questions
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function newIndex() {
  currentIndex.value += 1
}

function handleAnswerOnClick(index) {
  selectedAnswerIndex.value = index
}

function handleConfirmClick() {

  const question = questions.value[currentIndex.value]
  const selectedAnswer = shuffledAnswers.value[selectedAnswerIndex.value]

  if (selectedAnswer === question.correct_answer) {
    currentScore.value += 1
  }

  selectedAnswerIndex.value = null
  if (currentIndex.value === 10) {
    router
  }
  newIndex()
}

onMounted(() => {
  fetchData()
})

</script>

<template>
  <div class="container">
    <ul v-if="questions.length > 0">
      <li v-for="(question, index) in questions" :key="question.question">
        <div class="checkIndex" v-if="index === currentIndex">
          <p>Question: {{ index + 1 }}/10
            <span class="difficulty" v-html="question.difficulty"></span>
          </p>
          <p class="category">Category: {{ question.category }}</p>
          <p class="currentScore">Score: {{ currentScore }} /10</p>
          <hr>
          <p class="mainQuestion" v-html="question.question"></p>
          <div class="answerContainer">
            <p id="answer" v-for="(answer, answerIndex) in shuffledAnswers" :key="answer"
              :class="{ selected: answerIndex === selectedAnswerIndex }" @click="() => handleAnswerOnClick(answerIndex)"
              v-html="answer"></p>

            <div class="button" @click="handleConfirmClick">Confirm</div>
          </div>
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
  color: rgba(128, 128, 128, 0.2);
}

p {
  font-size: 32px;
  margin: 0;
}

h3 {
  font-size: 30px;
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
  box-shadow: 5px 5px 20px var(--Main-color);
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
}

.category {
  font-size: 25px;
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
  margin-top: .5em;
  cursor: pointer;
}
</style>
