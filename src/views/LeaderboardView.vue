<script setup>
import { ref, } from "vue";
import { usersRef } from "../firebase";
import { onValue } from "firebase/database";

const data = ref(null)
const leaderboard = ref([])


onValue(usersRef, (snapshot) => {
  data.value = snapshot.val();
  for (const key in data.value) {
    const user = data.value[key]
    leaderboard.value.push({
      username: user.username,
      score: user.totalscore
    });
    leaderboard.value.sort((a, b) => b.score - a.score);         //Sorterar användare i ordning efter poäng
  }
})

</script>

<template>
  <div>
    <h1>Leaderboard</h1>
    <hr>
    <div class="wrapper">
      <ul class="leaderboard" v-for="(user, index) in leaderboard" :key="index">
        <li>

          <p class="position">{{ index + 1 }}.</p> <!--Position/Rankning-->
          <p class="username">{{ user.username }}</p> <!--Användarnamn-->
          <p class="score">{{ user.score }}p</p>
        </li>
        <hr class="hr2">
      </ul>
    </div>
  </div>
</template>

<style scoped>
hr {
  margin: 10px;
  height: 1px;
  color: var(--Main-color);
  opacity: 30%;
}

li {
  display: flex;
  flex-direction: row;
  width: 300px;
  font-size: 20px;
}

.wrapper {
  background-color: var(--Main-lighter-color);
  padding: 30px;
  border-radius: 30px;
  color: #EEF1EF;
}

.hr2 {
  margin: 5px 0 10px 0;
  }
.score {
  margin-left: auto;
}

.position {
  width: 50px;
}
.leaderboard {
  position: relative;
  display: flex;
  width: 300px;
  flex-direction: column;
  padding: 10px;
}

h1 {
  color: var(--Main-color);
  font-size: 32px;
  text-align: center;
}
</style>
