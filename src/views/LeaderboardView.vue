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
    <ul class="leaderboard">
      <li v-for="(user, index) in leaderboard" :key="index" class="leaderboard-item">
        <div class="position">{{ index + 1 }}.</div> <!--Position/Rankning-->
        <div class="picture"></div> <!--Profilbild-->
        <div class="username">{{ user.username }}</div> <!--Användarnamn-->
        <div class="score">{{ user.score }}p</div> <!--Poäng-->
      </li>
    </ul>
  </div>
</template>

<style scoped>
h1 {
  color: var(--Main-color);
  font-size: 32px;
  text-align: center;
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

.leaderboard-item {
  display: flex;
  border-bottom: 1px solid #ccc;
  padding: 10px;
}
</style>
