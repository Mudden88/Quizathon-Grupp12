<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const apiUrl = 'https://opentdb.com/api.php?amount=10'
const questions = ref([])
const shuffledAnswers = (question) => {

  const answers = [...question.incorrect_answers, question.correct_answer]

  shuffleArray(answers)
  console.log('Answers = ', answers)
  return answers
}
async function fetchData() {
  let response = await axios.get(apiUrl)

  questions.value = response.data.results

  return questions
}

console.log('Questions = ', questions)

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function selectedAnswer(question, answer) {
  console.log('Selected answer:', answer)
  if (question.correct_answer === answer) {
    console.log('CORRECT!')
    return question.correct_answer
  } else {
    console.log('INCORRECT')
    return null
  }
}

function handleAnswerClick(question, answer) {
  const correctAnswer = selectedAnswer(question, answer)
  console.log('Correct Answer:', correctAnswer)
}

onMounted(() => {

  fetchData()

})

</script>

<template>
  <div class="container">
    <h1>RandomQuiz Component</h1>
    <ul v-if="questions.length > 0">
      <li v-for="(question, index) in questions" :key="question.question">
        <h3>Question {{ index + 1 }} <span class="difficulty">{{ question.difficulty }}</span>
        </h3>
        <hr>
        <p class="mainQuestion" v-html="question.question"></p>
        <div class="answerContainer">
          <p class="answer" v-for="answer in shuffledAnswers(question)" :key="answer"
            @click="() => handleAnswerClick(question, answer)">{{
              answer }}</p>

          <div class="button">Confirm</div>
        </div>
      </li>
    </ul>
    <p v-else>Loading question...</p>
  </div>
</template>

<style scoped>
.container {
  width: 390px;
  height: fit-content;
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
}

h3 {
  font-size: 30px;
}

.answer {
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

.answer:hover {
  transform: scale(1);
  background-color: var(--Pop-color);
}

.difficulty {
  font-size: 15px;
  color: var(--Accent-color);
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
  margin-top: 1.5em;
}
</style>
