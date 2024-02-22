<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import burger from "/src/assets/burger.png"
import menuX from "/src/assets/menuX.png"

const icon = ref(burger),
ifMenuClicked = ref(null)

const mobile = ref(null),
mobileNav = ref(null),
windowWidth = ref(null)

function checkScreen() {
  windowWidth.value = window.innerWidth
  if (windowWidth.value <= 800) {
    mobile.value = true
  } else {
    mobile.value = false
    mobileNav.value = false
  }
}

function toggleBurgerNav() {
  mobile.value = !mobile.value
  ifMenuClicked.value = !ifMenuClicked.value
}

function iconToggle() {
    icon.value = ifMenuClicked ? burger : menuX
}

window.addEventListener("resize", checkScreen)

</script>

<template> 
    <header>
    <nav>
<div class="logos">
  <RouterLink to="/"> <img id="logo" src="../assets/quizathon-logo.png" alt="logo"></RouterLink>
  <RouterLink to="/profile"><img id="profile" src="../assets/icons/profile-outline-icon.png" alt=""></RouterLink>
    </div>
  <div class="nagivation" v-show="!mobile">
  <ul>
       <li><RouterLink to="/instructions">Instructions 
          <img src="../assets/icons/instructions-icon.png" alt="">
        </RouterLink></li>
       <li><RouterLink to="/profile">Profile
          <img src="../assets/icons/profile-icon.png" alt="">
        </RouterLink></li>
        <li><RouterLink to="/leaderboard">Leaderboard 
          <img src="../assets/icons/crown-icon.png" alt="">
        </RouterLink></li>
        <li><RouterLink to="/contact">Contact
          <img src="../assets/icons/letter-icon.png" alt="">
        </RouterLink></li>
      </ul>
    </div>
  
  <div class="burger">
    <img id="burger" @click="toggleBurgerNav" :src="icon" alt="" v-show="mobile" :class="{'icon-active' : mobileNav}">

<ul class="dropdown-nav" v-show="mobileNav">
   <li @click="toggleBurgerNav" class="icons">
    <RouterLink to="/instructions">Instructions<img src="../assets/icons/instructions-icon.png" alt="">
    </RouterLink></li>
    <li @click="toggleBurgerNav" class="icons">
      <RouterLink to="/profile">Profile<img src="../assets/icons/profile-icon.png" alt="">
      </RouterLink></li>
    <li @click="toggleBurgerNav" class="icons">
      <RouterLink to="/leaderboard">Leaderboard<img src="../assets/icons/crown-icon.png" alt="">
      </RouterLink></li>
    <li @click="toggleBurgerNav" class="icons">
      <RouterLink to="/contact">Contact<img src="../assets/icons/letter-icon.png" alt=""></RouterLink></li>
  </ul> 
  </div>
    </nav>
</header>
</template>

<style scoped>
/* 
.desktop-navbar {
  height: 120px;
  width: 100vw;
  background-color: #eef1ef;
  display: flex;
  justify-content: space-between;
} */
/* 
button {
  margin-top: 35px;
  margin-right: 40px;
  height: 50px;
  border-style: none;
  cursor: pointer;
} */

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
/* 
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
} */
/* 
.icons {
    display: flex;
    border-top: solid #3a5e57 1px;
    margin-top: 50px;
    padding-top: 30px;
    padding-right: 15px;
    width: 350px;
} */

:root {
  --background: #eef1ef;
  --primary: #3a5e57;
  --secondary: #6d8c86;
  --boxText: #eef1ef;
  --yellow: #e6c16b;
  --bgText: #272727;
}

/* @media screen and (min-width: 880px) {
 header {
#logo {
  height: 130px;
}
.desktop-navbar {
  height: 160px;
  width: 100vw;
  background-color: #eef1ef;
} */

img {
height: 30px;
}

a {
  font-size: 30px;
  font-weight: lighter;
}

/* .burger {
  height: 120px;
  width: 100vw;
  background-color: #eef1ef;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

}
} */
</style>