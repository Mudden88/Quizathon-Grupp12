<script setup>
import InputField from "../components/InputField.vue";
</script>

<template>
  <h1>Log in</h1>

  <form class="login-form">
    <InputField
      label-prop="Username"
      placeholder-prop="Username"
      id-prop="username" />
    <InputField
      label-prop="Password"
      placeholder-prop="Password"
      id-prop="password" />
  </form>
</template>

<style scoped>
.login-form {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
}
</style>
