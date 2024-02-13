<script setup>

function randomQuiz() {
  alert('Här kommer det grejjer sen')
}

</script>

<template>
  <div class="container">
    <div class="hero">
      <div class="blur" @click="randomQuiz">
        <h2>Welcome</h2>
        <p>Start random quiz</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: fit-content;
  padding: 10px 0;
}

.hero {
  background: var(--Main-lighter-color);
  background-image: url(../assets/pattern.png);
  background-size: contain;
  color: var(--Light-color);
  width: 338px;
  height: 214px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 40px;
}

h2,
p {
  color: var(--Main-color);
  margin: 0;
}

p {
  font-size: 20px;
}

.blur {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 158px;
  height: 96px;
  backdrop-filter: blur(3px);
  border-radius: 20px;
  filter: drop-shadow(-2px 2px 0.2rem rgba(0, 0, 0, 0.2));
  cursor: pointer;
}
</style>
