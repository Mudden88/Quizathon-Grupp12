<script setup>
import InputField from "../components/InputField.vue";
import users from "../users.json";

console.log(users);

function logIn() {
  console.log("logged in");
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
      id-prop="username" />
    <InputField
      label-prop="Password"
      placeholder-prop="Password"
      id-prop="password" />
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
}
</style>
