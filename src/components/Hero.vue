<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="container">
    <div class="hero">

      <RouterLink to="/randomQuiz">
        <a>
          <div class="blur">
            <h2>Welcome</h2>
            <p>Start random quiz</p>
          </div>
        </a>
      </RouterLink>
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
  width: 338px;
  height: 214px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
}

a {
  text-decoration: none;
}

h2 {
  font-size: 40px;
}

h2,
p {

  color: var(--Light-color);
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
