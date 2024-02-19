<script setup>
import axios from 'axios'
import { ref, computed } from 'vue'
import ConfirmButton from '../components/ConfirmButton.vue'

//Variabler och referens värden
const apiUrl = 'https://opentdb.com/api.php?amount=10'
const questions = ref([])
const currentIndex = ref(0)
const selectedAnswerIndex = ref(null)
const currentScore = ref(0)


//Computed på shuffledAnswers, blandar svaren endast en gång per frågeomgång
const shuffledAnswers = computed(() => {
  if (questions.value.length > 0 && currentIndex.value < questions.value.length) {
    const question = questions.value[currentIndex.value]
    const answers = [...question.incorrect_answers, question.correct_answer]
    shuffleArray(answers)

    return answers
  }
  return []
})

//function för att hämta quiz och lagra i questions arrayen
async function fetchData() {
  let response = await axios.get(apiUrl)

  questions.value = response.data.results

  return questions
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
  selectedAnswerIndex.value = index
}

//Öka siffra efter varje fråga
function newIndex() {
  currentIndex.value += 1
}

//Logik för knappen, är svaret rätt. ökas currentScore,
//selectedAnswerIndex.value som fått ett index från functionen innan får
// Null för att släcka Pop-color
//Om currentIndex är 10 skickas man tillbaka till home,
//annars får den ett nytt index och ny fråga dyker upp.
function confirmClick() {

  const question = questions.value[currentIndex.value]
  const selectedAnswer = shuffledAnswers.value[selectedAnswerIndex.value]

  if (selectedAnswer === question.correct_answer) {
    currentScore.value += 1
    setScore()
    console.log('Correct! ', selectedAnswer)

  } else {

    console.log(selectedAnswer, 'is incorrect. Correct answer is ', question.correct_answer)
  }

  selectedAnswerIndex.value = null

  if (currentIndex.value === 10) {

    router.push("/")

  } else {
    newIndex()
  }
}

function setScore() {
  localStorage.setItem('userScore', currentScore.value)
}

function clearScore() {
  localStorage.removeItem('userScore')
}

function getScore() {
  console.log('Get score:', localStorage.getItem('userScore'))
}




//obvious
fetchData()
getScore()
clearScore()


</script>

<template>
  <div class="container">
    <!-- v-if för att kolla så att questions arrayen inte är tom. Är den tom så
     går v-else igenom som en "laddfunktion"
    for loop hämtar frågor och index, index för att hålla koll på vilken
    fråga av 10st som visas. Använder v-html för "encode" ska fungera-->
    <ul v-if="questions.length > 0">
      <li v-for="(question, index) in questions" :key="question.question">
        <div class="checkIndex" v-if="index === currentIndex">
          <p>Question: {{ index + 1 }}/10
            <span class="difficulty" v-html="question.difficulty"></span>
          </p>
          <p class="category">Category: <span v-html="question.category"></span></p>
          <p class="currentScore">Score: {{ currentScore }} /10</p>
          <hr>
          <p class="mainQuestion" v-html="question.question"></p>
          <!-- Hämtar blandade svar och svarsIndex,
            ändrar färg med dynamiska klasser -->
          <div class="answerContainer">
            <p id="answer" v-for="(answer, answerIndex) in shuffledAnswers" :key="answer"
              :class="{ selected: answerIndex === selectedAnswerIndex }" @click="() => answerOnClick(answerIndex)"
              v-html="answer"></p>

          </div>
          <ConfirmButton @Confirm="confirmClick" />
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
</style>
