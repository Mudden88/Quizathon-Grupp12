<script setup>
import { useStorage } from "../storage";
import { useRouter } from "vue-router";
import { usersRef } from "../firebase";
import { onValue } from "firebase/database";
import { ref } from "vue";
import crown from "../assets/icons/crown-icon.png";

const fromStorage = useStorage();
const router = useRouter();
const userScore = JSON.parse(localStorage.getItem("userScore"));

const data = ref(null);
onValue(usersRef, (snapshot) => {
  data.value = snapshot.val();
});

function logOut() {
  fromStorage.user = {
    username: "",
    isLoggedIn: false,
    score: null,
  };
  setTimeout(() => {
    router.push("/login");
  }, 1500);
}
</script>

<template>
  <div class="container">
    <h1 id="profile-name">Profile</h1>
    <hr />
    <div
      class="profile"
      v-if="fromStorage.user.isLoggedIn">
      <img
        :src="crown"
        alt="crown-icon" />
      <h1>Username: {{ fromStorage.user.username }}</h1>
      <h2>Latest Score: {{ userScore }}</h2>
      <h2>Total Score: {{ data[fromStorage.user.username].totalscore }}</h2>
      <button @click="logOut">Log out</button>
    </div>
    <h2 v-else>Please wait. You are being redirected...</h2>
  </div>
</template>

<style scoped>
.container {
  color: #272727;
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
}

#profile-name {
  color: var(--Main-color);
}

img {
  height: 36px;
}
.profile {
  background-color: var(--Main-lighter-color);
  color: var(--Light-color);
  width: 370px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
}

h1,
h2 {
  padding: 20px;
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
}

button:active {
  transform: scale(1.1);
}

hr {
  margin: 2em;
  width: 100%;
}
</style>
