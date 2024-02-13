<script setup>

function randomQuiz() {
  console.log('Här kommer det grejjer sen')
}

</script>

<template>
  <div class="container">
    <div class="startQuiz" @click="randomQuiz">
      <img class="qm1" src="../assets/Vectorqmark.png">
      <img class="qm2" src="../assets/Vectorqmark.png">
      <img class="qm3" src="../assets/Vectorqmark.png">
      <img class="qm4" src="../assets/Vectorqmark.png">
      <img class="qm5" src="../assets/Vectorqmark.png">
      <h2>Welcome</h2>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 20px;
  position: relative;
}

.qm1 {
  bottom: 40px;
  right: 30px;
  transform: rotate(10deg);
}

.qm2 {
  top: 30px;
  right: 70px;
  transform: rotate(-20deg);
}

.qm3 {
  bottom: 60px;
  left: 130px;
  transform: rotate(-28deg);
}

.qm4 {
  top: 60px;
  left: 80px;
  transform: rotate(-10deg);
}

.qm5 {
  right: 30px;
  bottom: 20px;
  transform: rotate(25deg);
}

.startQuiz {
  background: var(--Main-lighter-color);
  color: var(--Light-color);
  width: 338px;
  height: 214px;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.startQuiz h2 {
  font-size: 40px;
  position: relative;
  right: 60px;
}
</style>
