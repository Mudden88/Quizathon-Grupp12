<script setup>
import { ref } from 'vue'

const displayConfirm = ref(true)
const displayNext = ref(false)
// const disabledButton = ref(true)


const emit = defineEmits(['confirm', 'nextquestion'])
const props = defineProps({
  disabledButton: {
    type: Boolean
  }
})



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
    <button id="button" :disabled="disabledButton" @click="switchButton" v-if="displayConfirm">Confirm
    </button>
    <button id="button" @click="emitNext" v-if="displayNext">Next</button>
  </div>
</template>

<style scoped>
#button {
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

  &:disabled {
    opacity: 30%;
  }
}



#button:active {
  transform: scale(1.1);
}

@media (min-width: 900px) {
  .button-container {
    display: flex;
    flex-direction: row;
    gap: 3.7rem;
  }
}
</style>
