
<template>
  <div>
    <div class="button" @click="$emit('confirm')">Confirm</div>
    <div class="button" @click="$emit('nextquestion')">Next question</div>
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
  margin-left: 20px;
  margin-top: .5em;
  cursor: pointer;
}
</style>
