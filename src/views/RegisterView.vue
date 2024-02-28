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
  userId = ref(1),
  passwordInput = ref(null);

function setUsername(input) {
  usernameInput.value = input;
}

function setPassword(input) {
  passwordInput.value = input;
}

function submitUserInfo() {
  addUser(userId.value, usernameInput.value, passwordInput.value);
}
function addUser(id, username, password) {
  set(dbref(db, `users/${username}`), {
    username: username,
    password: password,
    id: id,
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
      label-prop="Password"
      placeholder-prop="Password"
      id-prop="password"
      type-prop="password"
      @onInput="setPassword" />
    <button @click="submitUserInfo">Register</button>
  </form>
</template>
