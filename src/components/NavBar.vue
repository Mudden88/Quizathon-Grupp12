<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import imgUrl from "/src/assets/quizathon-logo.png"
import burger from "/src/assets/burger.png"
import menuX from "/src/assets/menuX.png"

const clicked = ref(true)
const icon = ref(burger)

const ifmenuClicked = ref(false)

function menuClicked() {
ifmenuClicked.value = !ifmenuClicked.value
if (clicked.value = true) {
    icon.value = menuX
}
else {icon.value = burger}

}

</script>

<template>
<nav>
  <div class="navbar">
  <div class="burger">
  <img id="burger" :src="icon" alt="" @click="menuClicked">
</div>
  <div class="burger-menu" v-show="ifmenuClicked">
    <RouterLink to="/menu">BLAJA</RouterLink>
    
    </div>
    <img id="logo" :src="imgUrl" alt="logo">
  </div>
</nav>
</template>

<style scoped>

.navbar {
  height: 120px;
  width: 100vw;
  background-color: #eef1ef;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
 
}

button {
  margin-top: 35px;
  margin-right: 40px;
  height: 50px;
  border-style: none;
  cursor: pointer;
}

#logo {
  height: 100px;
  justify-content: center;
  align-items: center;
}

img {
  display: flex;
}

.burger {
    width: 60px;
}

#burger, #menuX {
  height: 50px;
  justify-content: left;
}

a {
  margin: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #292c2a;
}

:root {
  --background: #eef1ef;
  --primary: #3a5e57;
  --secondary: #6d8c86;
  --boxText: #eef1ef;
  --yellow: #e6c16b;
  --bgText: #272727;
}
</style>