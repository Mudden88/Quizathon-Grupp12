<template>
  <div>
    <h1>Leaderboard</h1>
    <ul class="leaderboard">
      <li
        v-for="(user, index) in leaderboard"
        :key="index"
        class="leaderboard-item">
        <div class="position">{{ index + 1 }}.</div>
        <!--Position/Rankning-->
        <div class="picture"></div>
        <!--Profilbild-->
        <div class="username">{{ user.username }}</div>
        <!--Användarnamn-->
        <div class="score">{{ user.score }}p</div>
        <!--Poäng-->
      </li>
    </ul>
  </div>
</template>

<script>
import { usersRef } from "../firebase";
import { onValue } from "firebase/database";

export default {
  data() {
    return {
      data: null,
      leaderboard: [],
    };
  },

  created() {
    //Rendera leaderboard med data från Firebase i realtid
    onValue(usersRef, (snapshot) => {
      this.data = snapshot.val();
      this.leaderboard = [];
      for (const key in this.data) {
        const user = this.data[key];
        this.leaderboard.push({
          username: user.username,
          score: user.totalscore,
        });
        this.leaderboard.sort((a, b) => b.score - a.score); //Sorterar användare i ordning efter poäng
      }
    });
  },
};
</script>

<style scoped>
/* Style lokal */
h1 {
  color: #333;
  font-size: 24px;
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
