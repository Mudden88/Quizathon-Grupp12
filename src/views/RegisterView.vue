<script setup>
import { usersRef, db } from "../firebase";
import InputField from "../components/InputField.vue";
import { onValue, set, ref as dbref } from "firebase/database";
import { ref } from "vue";

const data = ref(null);
onValue(usersRef, (snapshot) => {
  data.value = snapshot.val();
  console.log(data.value);
});

const usernameInput = ref(null),
  emailInput = ref(null),
  userId = ref(1),
  passwordInput = ref(null);

function setUsername(input) {
  usernameInput.value = input;
}
function setEmail(input) {
  emailInput.value = input;
}

function setPassword(input) {
  passwordInput.value = input;
}

function checkPassword(input) {
  let confirmPassword = input;
  if (passwordInput.value !== confirmPassword) {
    btnDisabled.value = true;
  } else {
    btnDisabled.value = false;
  }
}

function submitUserInfo() {
  addUser(
    userId.value,
    usernameInput.value,
    passwordInput.value,
    emailInput.value
  );
}
function addUser(id, username, password, email) {
  set(dbref(db, `users/${username}`), {
    username: username,
    password: password,
    id: id,
    email: email,
  });
}
</script>

<template>
  <h1>Register</h1>
  <form>
    <InputField
      label-prop="Username"
      placeholder-prop="Username"
      id-prop="username"
      type-prop="text"
      @onInput="setUsername" />
    <InputField
      label-prop="Email"
      placeholder-prop="Email"
      id-prop="email"
      type-prop="email"
      @onInput="setEmail" />
    <InputField
      label-prop="Password"
      placeholder-prop="Password"
      id-prop="password"
      type-prop="password"
      @onInput="setPassword" />
    <InputField
      label-prop="Confirm password"
      placeholder-prop="Confirm password"
      id-prop="confirmPassword"
      type-prop="password"
      @onInput="checkPassword" />
    <button
      class="signup-btn"
      @click="submitUserInfo">
      Register
    </button>
  </form>
</template>

<style scoped>
.signup-btn {
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

  &:disabled {
    opacity: 30%;
  }
}
</style>
