<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import burger from "/src/assets/burger.png"
import menuX from "/src/assets/menuX.png"

const icon = ref(burger),
ifMenuClicked = ref(false)

function menuClicked() {
ifMenuClicked.value = !ifMenuClicked.value
icon.value = ifMenuClicked.value ? menuX : burger
}

</script>

<template> 
    <header>
    <nav>
<div class="navbar">
  <!-- <div class="burger" @click="closeMenu">
  <img id="burger" :src="icon" alt="" @click="menuClicked">
</div> -->
<div class="desktop-header">
      <div class="nav">
       <RouterLink to="/"> <img id="logo" src="../assets/quizathon-logo.png" alt="logo"></RouterLink>
        <RouterLink to="/instructions">Instructions 
          <img src="../assets/icons/instructions-icon.png" alt="">
        </RouterLink>
        <RouterLink to="/profile">Profile
          <img src="../assets/icons/profile-icon.png" alt="">
        </RouterLink>
        <RouterLink to="/leaderboard">Leaderboard 
          <img src="../assets/icons/crown-icon.png" alt="">
        </RouterLink>
        <RouterLink to="/contact">Contact
          <img src="../assets/icons/letter-icon.png" alt="">
        </RouterLink>
      </div>
    </div>
  </div>
    <!-- <img id="logo" src="../assets/quizathon-logo.png" alt="logo">
    <img id="profile" src="../assets/icons/profile-outline-icon.png" alt="">
  
  <div class="burger-menu" v-show="ifMenuClicked">
    <div @click="menuClicked" class="icons"><RouterLink to="/instructions">Instructions </RouterLink><img src="../assets/icons/instructions-icon.png" alt=""></div>
    <div @click="menuClicked" class="icons"><RouterLink to="/profile">Profile</RouterLink><img src="../assets/icons/profile-icon.png" alt=""></div>
    <div @click="menuClicked" class="icons"><RouterLink to="/leaderboard">Leaderboard</RouterLink><img src="../assets/icons/crown-icon.png" alt=""></div>
    <div @click="menuClicked" class="icons"><RouterLink to="/contact">Contact<img src="../assets/icons/letter-icon.png" alt=""></RouterLink></div>
    </div> -->

    </nav>
</header>
</template>

<style scoped>

.navbar {
  height: 120px;
  width: 100vw;
  background-color: #eef1ef;
  display: flex;
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
}

img {
  height: 50px;
}

#profile, #burger {
    margin: 30px 10px 0 10px
}

a {
  margin: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #3a5e57;
  font-size: 40px;
}

.burger-menu {
    margin-top: 100px;
    height:500px;
    width: 100vw;
    display: flex;
    align-items: center;   
    flex-direction: column;
    position: absolute;
    top: 0;
    z-index: 1;
    background-color: #eef1ef; 
}

.icons {
    display: flex;
    border-top: solid #3a5e57 1px;
    margin-top: 50px;
    padding-top: 30px;
    padding-right: 15px;
    width: 350px;
}

:root {
  --background: #eef1ef;
  --primary: #3a5e57;
  --secondary: #6d8c86;
  --boxText: #eef1ef;
  --yellow: #e6c16b;
  --bgText: #272727;
}

@media screen and (min-width: 880px) {
 header {
#logo {
  height: 130px;
}
.navbar {
  height: 160px;
  width: 100vw;
  background-color: #eef1ef;

}

img {
height: 30px;
}

a {
  font-size: 30px;
  font-weight: lighter;
}

.desktop-header {
  height: 120px;
  width: 100vw;
  background-color: #eef1ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav {
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
}

}
}
</style>