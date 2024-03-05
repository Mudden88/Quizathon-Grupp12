<template>
  <div>
    <h1>Leaderboard</h1>
    <ul class="leaderboard">
      <li v-for="(user, index) in leaderboard" :key="index" class="leaderboard-item">
      <div class="position">{{ index + 1 }}.</div>        <!--Position/Rankning-->
      <div class="picture"></div>                         <!--Profilbild-->
      <div class="username">{{ user.username }}</div>     <!--Användarnamn-->
      <div class="score">{{ user.score }}p</div>          <!--Poäng-->
    </li>
  </ul>
  </div>
</template>

<script>

import users from "../users.json";

export default {
  data() {
    return {
      leaderboard: []
    };
  },
  mounted() {
    //Rendera leaderboard med data från JSON
    for (const key in users) {
      if (Object.hasOwnProperty.call(users, key)) {
        const user = users[key];
        this.leaderboard.push({
          username: user.username,
          score: user.totalscore
        });
      }
    }

    //Sorterar användare i ordning efter poäng
    this.leaderboard.sort((a, b) => b.score - a.score);
  }
};
</script>

<style scoped>
/* Style lokal */
h1 {
  color: #333;
  font-size: 24px;
}

.score{
  margin-left: auto;
}

.position{
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
