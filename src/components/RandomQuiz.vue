<script setup>
import axios from 'axios'
import { onMounted } from 'vue'

const questions = []
const fetchData = () => {
  try {
    axios.get('https://opentdb.com/api.php?amount=10')
      .then(response => {
        questions.push(...response.data.results)

      })

  } catch (error) {
    console.error('Error while fetching', error)
  }

}

onMounted(() => {

  fetchData()
})

</script>

<template>
  <h1>RandomQuiz Component</h1>
  <ul v-for="question in questions" :key="question.question">

  </ul>
</template>

<style scoped>
.questionBox {
  height: 80px;
  width: 300px;
  padding: 20px;
  margin: 10px;
  color: var(--Dark-color);
}

.answer {
  background-color: var(--Accent-color);
  border-radius: 10px;
  padding: 10px;
  margin: 5px;
}
</style>
