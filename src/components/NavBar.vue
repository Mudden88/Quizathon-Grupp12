<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router"; 
import { useStorage } from "../storage"; 
import burger from "/src/assets/burger.png"
import menuX from "/src/assets/menuX.png"

const icon = ref(burger),
mobile = ref(null),
mobileNav = ref(null),
windowWidth = ref(null)

function checkScreen() {
  windowWidth.value = window.innerWidth
  if (windowWidth.value <= 800) {
    mobile.value = true
    mobileNav.value = false
  } else {
    icon.value = burger
    mobile.value = false
    mobileNav.value = false
  }
}

function userLogin() { 
console.log(fromStorage.user.isLoggedIn); 
if (fromStorage.user.isLoggedIn === true) { 
router.push("/profile"); 
} 
if (fromStorage.user.isLoggedIn === false) { 
router.push("/login"); 
} 
} 

function goHome() { 
router.push("/"); 
} 

const fromStorage = useStorage(); 

function toggleBurgerNav() {
  mobileNav.value = !mobileNav.value
  if (mobile.value === true) {
  icon.value = !mobileNav.value ? burger : menuX
  }
}

checkScreen ()

window.addEventListener("resize", checkScreen)

function goHome() {
  router.push("/");
}
</script>

<template>
  <header>
    <nav>
    
<div class="logos">
    <img id="burger" @click="toggleBurgerNav" :src="icon" alt="" v-show="mobile">
 <img @click="goHome" id="logo" src="../assets/quizathon-logo.png" alt="logo">

  <ul class="navigation" v-show="!mobile">
    <div class="desktop-links"><li><RouterLink to="/instructions">Instructions
      <img src="../assets/icons/instructions-icon.png" alt="">
      </RouterLink></li></div>
      <div class="desktop-links"><li><RouterLink to="/profile">Profile
      <img @click="userLogin" src="../assets/icons/profile-icon.png" alt="">
      </RouterLink></li></div>
      <div class="desktop-links"><li><RouterLink to="/leaderboard">Leaderboard 
      <img src="../assets/icons/crown-icon.png" alt="">
      </RouterLink></li></div>
      <div class="desktop-links"><li><RouterLink to="/contact">Contact
      <img src="../assets/icons/letter-icon.png" alt="">
      </RouterLink></li></div>
    </ul>
  <RouterLink to="/profile">
    <img id="profile" src="../assets/icons/profile-outline-icon.png" alt="">
  </RouterLink>
</div>

<ul class="dropdown-nav" v-show="mobileNav">
   <li @click="toggleBurgerNav" class="icons">
    <RouterLink to="/instructions">Instructions mobil<img src="../assets/icons/instructions-icon.png" alt="">
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
  
    </nav>
  </header>
</template>

<style scoped>
.dropdown-nav {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dropdown-nav > li {
  margin: 20px 20px 10px 20px;
  padding: 10px;
  width: 300px;
  border-bottom: solid #3a5e57 1px;
}

.desktop-links {
  margin: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #3a5e57;
  font-size: 30px;
  display: flex;
  justify-content: center;
}

.navigation {
  display: flex;
}

li {
  display: flex;
  flex-direction: column;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
}

.logos {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#logo {
  height: 100px;
}

img {
  height: 30px;
  margin-left: 10px;
}

#profile, #burger {
  height: 45px;
    margin: 10px 20px
}

 a {
  margin: 10px;
  font-size: 20px;
  text-decoration: none;
  color: #3a5e57;
  font-size: 30px;
  /* display: flex;
  justify-content: center; */
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
