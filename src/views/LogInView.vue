<script setup>
import { ref } from "vue";
import router from "../router.js";
import { useStorage } from "../storage";
import InputField from "../components/InputField.vue";
// import users from "../users.json";
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

function logIn(e) {
  e.preventDefault;
  if (inputUserName.value in data.value) {
    error.value = false;
    let user = data.value[inputUserName.value];
    if (inputPassword.value === user.password) {
      fromStorage.user.username = user.username;
      fromStorage.user.isLoggedIn = true;
      router.push("/");
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
  router.push("/");
}

function goToSignup() {
  router.push("/register");
}
</script>

<template>
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

  color: var(--Light-color);
  font-size: 2.25rem;

  &:focus {
    outline: 3px solid var(--Accent-color);
  }
}

.guest-btn {
  font-size: 1.4rem;
  color: var(--Main-color);
  padding: 8px 50px;
  border: none;
  border-radius: 13px;
  background-color: var(--Accent-color);

  &:focus {
    outline: 3px solid var(--Accent-color);
  }
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

  &:hover {
    box-shadow: 4px 4px 6px #27272730 inset;
  }
}
</style>
