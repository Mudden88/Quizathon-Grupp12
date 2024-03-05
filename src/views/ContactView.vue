<script setup>
import InputField from "../components/InputField.vue";
import { ref } from "vue";

const emailInput = ref(null);
const emailError = ref(null);

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

function refreshPage() {
  location.reload();
}
</script>

<template>
  <h1>Contact</h1>
  <p class="error-msg"></p>
  <form class="signup-form">
    <div>
      <InputField
        label-prop="Name*"
        placeholder-prop="Name"
        id-prop="Name"
        type-prop="text"
      />
    </div>
    <div>
      <InputField
        label-prop="Email*"
        placeholder-prop="Email"
        id-prop="email"
        type-prop="email"
        @onInput="setEmail"
      />
      <p v-if="emailError" class="error-msg">Not a valid email</p>
    </div>
    <div class="input-wrapper">
      <label class="label">Message*</label>
      <textarea class="input-field" placeholder="Message"></textarea>
    </div>
    <button type="button" class="send-btn" @click="refreshPage()">
      Send Message
    </button>
  </form>
</template>

<style scoped>
h1 {
  color: var(--Main-color);
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

.small-text {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 0.7rem;
  color: var(--Dark-color);
  margin-block: 14px;
}
.send-btn {
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

.send-btn:active {
  transform: scale(1.1);
}

.label {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  font-size: 1.1rem;
  color: var(--Main-color);
}

.input-field {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1.1rem;
  color: var(--Dark-color);
  padding: 12px;
  max-width: 290px;
  min-width: 290px;
  height: 150px;
  border: none;
  border-radius: 9px;
  background-color: var(--Light-color);
  box-shadow: inset 5px 4px 12px #55666370;

  &::placeholder {
    color: #a5a5a5;
  }

  &:focus {
    outline: 3px solid var(--Accent-color);
  }
}
.input-wrapper {
  display: flex;
  flex-direction: column;
}
</style>
