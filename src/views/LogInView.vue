<script setup>
import InputField from "../components/InputField.vue";
</script>

<template>
  <h1>Log in</h1>

  <form action="#">
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
