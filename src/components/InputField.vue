<script setup>
import { ref } from "vue";

const input = ref("");

const props = defineProps({
  labelProp: { type: String, required: true },
  placeholderProp: { type: String, required: true },
  idProp: { type: String, required: true },
  typeProp: { type: String, required: true },
});
// const emit = defineEmits(["sendInput"]);
</script>

<template>
  <div class="input-wrapper">
    <label
      class="label"
      :for="idProp"
      >{{ labelProp }}</label
    >
    <input
      class="input-field"
      :type="typeProp"
      :id="idProp"
      :placeholder="placeholderProp"
      v-model="input"
      @input="$emit('onInput', input)" />
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
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

  width: 290px;
  height: 54px;
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
</style>
