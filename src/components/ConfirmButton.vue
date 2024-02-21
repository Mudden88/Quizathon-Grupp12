<script setup>
import { ref } from 'vue'

const displayConfirm = ref(true)
const displayNext = ref(false)

const emit = defineEmits(['confirm', 'nextquestion'])

function switchButton() {
  displayConfirm.value = false
  displayNext.value = true
  emit('confirm')
}

function emitNext() {
  emit('nextquestion')
}



</script>

<template>
  <div>
    <div class="button" @click="switchButton" v-if="displayConfirm">Confirm</div>
    <div class="button" @click="emitNext" v-if="displayNext">Next</div>
  </div>
</template>

<style scoped>
.button {
  width: 291px;
  height: 63px;
  border-radius: 20px;
  background-color: var(--Main-lighter-color);
  color: var(--Light-color);
  font-size: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: 1em;
  cursor: pointer;
}

.button:active {
  transform: scale(1.1);
}
</style>
