<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

const questions = ref([])

const fetchData = async () => {
  try {
    const response = await axios.get('https://opentdb.com/api.php?amount=10')

    questions.value.push(...response.data.results)

  } catch (error) {
    console.error('Error while fetching:', error)
  }
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
        <p class="mainQuestion"> {{ question.question }}</p>
        <div class="answerContainer">
          <p class="answer" v-html="question.correct_answer"></p>
          <p class="answer" v-for="answer in question.incorrect_answers" :key="answer" v-html="answer"></p>

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
  height: 63px;
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
</style>
