<script setup>
import { ref } from 'vue'
import { useStorage } from "storage";
import { useRouter } from "vue-router";

const fromStorage = useStorage();
const router = useRouter()
const userScore = JSON.parse(localStorage.getItem('userScore'))

function logOut() {
  fromStorage.user = {
    username: '',
    isLoggedIn: false,
    score: null,
  };
  setTimeout(() => {
    router.push('/login')
  }, 1500)
}
</script>

<template>

  <div class="container">
    <h1>Profile</h1>
    <hr>
    <div class="profile" v-if="fromStorage.user.isLoggedIn">
      <h2>Username: {{ fromStorage.user.username }}</h2>
      <h2>Latest Score: {{ userScore }}</h2>
      <button @click="logOut">Log out</button>
    </div>
    <h2 v-else>Please wait. You are being redirected...</h2>
  </div>
</template>

<style scoped>
.container {
  background-color: var(--Main-lighter-color);
  color: var(--Light-color);
  width: 500px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
}

button {
  width: 291px;
  height: 63px;
  border-radius: 20px;
  background-color: var(--Accent-color);
  color: var(--Main-color);
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: 1em;
  cursor: pointer;
  border-style: none;

  &hover {
    background-color: var(--Main-lighter-color);
  }
}

button:active {
  transform: scale(1.1);
}

hr {
  margin: 2em;
  width: auto;
}
</style>
