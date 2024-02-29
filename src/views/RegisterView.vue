<!-- spaces not allowed, connect everything to firebase instead of users.json, page when registered -->

<script setup>
import { usersRef, db } from "../firebase";
import InputField from "../components/InputField.vue";
import { onValue, set, ref as dbref } from "firebase/database";
import { ref, watch } from "vue";
import router from "../router";

const data = ref(null);
onValue(usersRef, (snapshot) => {
  data.value = snapshot.val();
});

const usernameInput = ref(null),
  usernameError = ref(null),
  emailInput = ref(null),
  emailError = ref(null),
  passwordInput = ref(null),
  passwordError = ref(null),
  confirmPasswordInput = ref(null),
  confirmPasswordError = ref(null),
  btnDisabled = ref(true),
  formValidation = ref(false);

function setUsername(input) {
  usernameInput.value = input;
  if (usernameInput.value !== null || usernameInput.value !== "") {
    usernameError.value = false;
    if (usernameInput.value in data.value) {
      usernameError.value = true;
      console.log("username is taken");
    }
  }
}

function setEmail(input) {
  emailInput.value = input;
  if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(emailInput.value)
  ) {
    emailError.value = true;
  } else {
    emailError.value = false;
  }
}

function setPassword(input) {
  passwordInput.value = input;
  if (passwordInput.value.length < 4) {
    passwordError.value = true;
  } else {
    passwordError.value = false;
  }
}

function checkPassword(input) {
  confirmPasswordInput.value = input;
  if (passwordInput.value !== confirmPasswordInput.value) {
    confirmPasswordError.value = true;
  } else {
    confirmPasswordError.value = false;
  }
}

watch([usernameError, emailError, passwordError, confirmPasswordError], () => {
  if (
    usernameError.value === false &&
    emailError.value === false &&
    passwordError.value === false &&
    confirmPasswordError.value === false
  ) {
    formValidation.value = true;
    btnDisabled.value = false;
  }
});

function submitUserInfo() {
  addUser(usernameInput.value, passwordInput.value, emailInput.value);
  router.push("/login");
}

function addUser(username, password, email) {
  set(dbref(db, `users/${username}`), {
    username: username,
    password: password,
    email: email,
  });
}
</script>

<template>
  <h1>Register</h1>
  <form class="signup-form">
    <div>
      <InputField
        label-prop="Username*"
        placeholder-prop="Username"
        id-prop="username"
        type-prop="text"
        @onInput="setUsername" />
      <p
        v-if="usernameError"
        class="error-msg">
        Username is taken
      </p>
    </div>
    <div>
      <InputField
        label-prop="Email*"
        placeholder-prop="Email"
        id-prop="email"
        type-prop="email"
        @onInput="setEmail" />
      <p
        v-if="emailError"
        class="error-msg">
        Not a valid email
      </p>
    </div>
    <div>
      <InputField
        label-prop="Password*"
        placeholder-prop="Password"
        id-prop="password"
        type-prop="password"
        @onInput="setPassword" />
      <p
        v-if="passwordError"
        class="error-msg">
        Must contain at least 4 characters
      </p>
    </div>
    <div>
      <InputField
        label-prop="Confirm password*"
        placeholder-prop="Confirm password"
        id-prop="confirmPassword"
        type-prop="password"
        @onInput="checkPassword" />
      <p
        v-if="confirmPasswordError"
        class="error-msg">
        Passwords do not match
      </p>
    </div>
    <button
      class="signup-btn"
      type="submit"
      :disabled="btnDisabled"
      @click="submitUserInfo">
      Register
    </button>
  </form>
</template>

<style scoped>
h1 {
  color: var(--Dark-color);
  margin-block: 20px;
}
.signup-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
}

.error-msg {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.75rem;
  color: var(--Error-color);
}
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
