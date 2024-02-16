<script setup>
import { ref } from "vue";

import InputField from "../components/InputField.vue";
import users from "../users.json";

const error = ref(false),
  inputUserName = ref(""),
  inputPassword = ref("");

function logIn() {
  if (inputUserName.value in users) {
    error.value = false;
    let user = users[inputUserName.value];
    if (inputPassword.value === user.password) {
      console.log("yes");
    } else {
      console.log("nope");
    }
  } else {
    error.value = true;
  }
}

function testUsername(input) {
  inputUserName.value = input;
}

function testPassword(input) {
  inputPassword.value = input;
}
</script>

<template>
  <h1>Log in</h1>

  <form
    class="login-form"
    id="login-form">
    <InputField
      label-prop="Username"
      placeholder-prop="Username"
      id-prop="username"
      type-prop="text"
      @onInput="testUsername" />
    <p v-if="error">Error</p>
    <InputField
      label-prop="Password"
      placeholder-prop="Password"
      id-prop="password"
      type-prop="password"
      @onInput="testPassword" />
    <button
      class="login-btn"
      type="submit"
      form="login-form"
      value="LogIn"
      @click="logIn">
      Log in
    </button>
  </form>
</template>

<style scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
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
</style>
