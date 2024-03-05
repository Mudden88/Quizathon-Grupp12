<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="container">
    <div class="hero">
      <RouterLink to="/Quiz/random">
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
  box-shadow: 2px 2px 9px #426c6470;
  cursor: pointer;
}

@media (min-width: 750px) {
  .hero {
    width: 600px;
    height: 300px;
    font-size: 48px;
  }

  h2 {
    font-size: 68px;
  }

  .blur {
    width: 300px;
    height: 150px;
  }
}

@media (min-width: 1200px) {
  .hero {
    width: 1000px;
    height: 300px;
  }

  h2 {
    font-size: 68px;
  }

  .blur {
    width: 300px;
    height: 150px;
  }
}
</style>
