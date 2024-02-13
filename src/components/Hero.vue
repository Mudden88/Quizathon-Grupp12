<template>
  <div class="container">
    <div class="startQuiz">
      <img class="qm1" src="../assets/Vectorqmark.png">
      <img class="qm2" src="../assets/Vectorqmark.png">
      <img class="qm2" src="../assets/Vectorqmark.png">
      <h2>Welcome</h2>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 20px;
}

.container {
  width: 100vw;
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
}

.startQuiz h2 {
  font-size: 40px;
}
</style>
