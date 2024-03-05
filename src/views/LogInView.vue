<script setup>
import { ref } from "vue";
import router from "../router.js";
import { useStorage } from "../storage";
import ConfettiExplosion from "vue-confetti-explosion";
import InputField from "../components/InputField.vue";
import { usersRef } from "../firebase";
import { onValue } from "firebase/database";

const fromStorage = useStorage();

const data = ref(null);
onValue(usersRef, (snapshot) => {
  data.value = snapshot.val();
});

const error = ref(false),
  inputUserName = ref(""),
  inputPassword = ref("");

const loggedIn = ref(false);

function logIn(e) {
  e.preventDefault;
  if (inputUserName.value in data.value) {
    error.value = false;
    let user = data.value[inputUserName.value];
    if (inputPassword.value === user.password) {
      fromStorage.user.username = user.username;
      fromStorage.user.isLoggedIn = true;
      loggedIn.value = true;
      if (loggedIn.value) {
        setTimeout(() => {
          loggedIn.value = false;
          router.push("/");
        }, 2500);
      }
    } else {
      error.value = true;
    }
  } else {
    error.value = true;
  }
}

function setUsername(input) {
  inputUserName.value = input;
}

function setPassword(input) {
  inputPassword.value = input;
}

function guestUser() {
  fromStorage.user.username = "Guest";
  fromStorage.user.isLoggedIn = true;
  loggedIn.value = true;
  if (loggedIn.value) {
    setTimeout(() => {
      loggedIn.value = false;
      router.push("/");
    }, 2500);
  }
}

function goToSignup() {
  router.push("/register");
}
</script>

<template>
  <div
    class="message"
    v-show="loggedIn">
    <h1>Welcome {{ fromStorage.user.username }} !</h1>
    <h2>Get ready to Quiz!</h2>
    <ConfettiExplosion
      v-if="loggedIn"
      :particleCount="200"
      :force="0.6"
      :stageHeight="1000"
      :stageWidth="800" />
  </div>
  <section class="container">
    <h1 class="heading">Log in</h1>
    <form
      class="login-form"
      id="login-form">
      <InputField
        label-prop="Username"
        placeholder-prop="Username"
        id-prop="username"
        type-prop="text"
        @onInput="setUsername" />
      <InputField
        label-prop="Password"
        placeholder-prop="Password"
        id-prop="password"
        type-prop="password"
        @onInput="setPassword" />
      <p
        v-if="error"
        class="error-msg">
        Wrong username or password. Please try again!
      </p>
      <button
        class="login-btn"
        type="submit"
        form="login-form"
        value="LogIn"
        @click="logIn">
        Log in
      </button>
    </form>
    <button
      class="guest-btn"
      @click="guestUser">
      Continue as guest
    </button>
    <p class="small-text">Don't have an account?</p>
    <button
      class="signup-btn"
      @click="goToSignup">
      Sign up
    </button>
  </section>
</template>

<style scoped>
.message {
  background-color: var(--Accent-color);
  color: var(--Main-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 370px;
  box-shadow: 10px 10px 10px var(--Main-color);
  border-radius: 40px;
  margin-bottom: 30px;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.heading {
  color: var(--Main-color);
  font-size: 2rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
}

.error-msg {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.75rem;
  text-decoration: underline;
  color: var(--Error-color);
}

.login-btn {
  width: 260px;
  height: 63px;
  border: none;
  border-radius: 20px;
  background-color: var(--Main-lighter-color);
  cursor: pointer;
  color: var(--Light-color);
  font-size: 2.25rem;

  &:focus {
    outline: 3px solid var(--Accent-color);
  }
}

.login-btn:active {
  transform: scale(1.1);
}

.guest-btn {
  font-size: 1.4rem;
  color: var(--Main-color);
  padding: 8px 50px;
  border: none;
  border-radius: 13px;
  background-color: var(--Accent-color);
  cursor: pointer;

  &:focus {
    outline: 3px solid var(--Accent-color);
  }
}

.guest-btn:active {
  transform: scale(1.1);
}

.small-text {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.7rem;
  color: var(--Dark-color);
  margin-block: 14px;
}

.signup-btn {
  font-size: 1.4rem;
  background-color: var(--Light-color);
  border: 3px solid var(--Main-color);
  border-radius: 13px;
  color: var(--Main-color);
  padding: 8px 50px;
  cursor: pointer;

  &:hover {
    box-shadow: 4px 4px 6px #27272730 inset;
  }
}

.signup-btn:active {
  transform: scale(1.1);
}
</style>
