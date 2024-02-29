<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { useStorage } from "../storage";
import burger from "/src/assets/burger.png"
import menuX from "/src/assets/menuX.png"


const router = useRouter(),
  icon = ref(burger),
  mobile = ref(null),
  mobileNav = ref(false),
  windowWidth = ref(null),
  fromStorage = useStorage(),
  emit = defineEmits(['overlay']);

function checkScreen() {
  windowWidth.value = window.innerWidth
  if (windowWidth.value <= 1152) {
    mobile.value = true
    mobileNav.value = false
  } else {
    icon.value = burger
    mobile.value = false
    mobileNav.value = false
  }
}

function userLogin() {
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

function toggleBurgerNav() {
  mobileNav.value = !mobileNav.value
  if (mobile.value === true) {
    icon.value = !mobileNav.value ? burger : menuX
    emit('overlay')
  }
}

const clickOutside = (e) => {
  const isIcon = e.target.id === 'burger'
  if (!isIcon && mobileNav.value && !e.target.closest('.dropdown-nav')) {
    mobileNav.value = false
    icon.value = burger
  }
}
checkScreen()
window.addEventListener("resize", checkScreen)
window.addEventListener('click', clickOutside)

</script>

<template>
  <header>
    <nav>

      <div class="logos">
        <img id="burger" @click="toggleBurgerNav" :src="icon" alt="" v-show="mobile">
        <img @click="goHome" id="logo" src="../assets/quizathon-logo.png" alt="logo">

        <ul class="navigation" v-show="!mobile">
          <div class="desktop-links">
            <li>
              <RouterLink to="/">Home
                <img src="../assets/icons/house-icon.png" alt="">
              </RouterLink>
            </li>
          </div>
          <div class="desktop-links">
            <li>
              <RouterLink to="/instructions">Instructions
                <img src="../assets/icons/instructions-icon.png" alt="">
              </RouterLink>
            </li>
          </div>
          <div class="desktop-links">
            <li>
              <a @click="userLogin">Profile
                <img src="../assets/icons/profile-icon.png" alt=""></a>

            </li>
          </div>
          <div class="desktop-links">
            <li>
              <RouterLink to="/leaderboard">Leaderboard
                <img src="../assets/icons/crown-icon.png" alt="">
              </RouterLink>
            </li>
          </div>
          <div class="desktop-links">
            <li>
              <RouterLink to="/contact">Contact
                <img src="../assets/icons/letter-icon.png" alt="">
              </RouterLink>
            </li>
          </div>
        </ul>
        <a @click="userLogin">
          <img id="profile" src="../assets/icons/profile-outline-icon.png" alt="">
        </a>
      </div>

      <ul class="dropdown-nav" v-show="mobileNav">
        <li @click="toggleBurgerNav" class="icons">
          <RouterLink to="/">Home<img src="../assets/icons/house-icon.png" alt="">
          </RouterLink>
        </li>
        <li @click="toggleBurgerNav" class="icons">
          <RouterLink to="/instructions">Instructions<img src="../assets/icons/instructions-icon.png" alt="">
          </RouterLink>
        </li>
        <li @click="toggleBurgerNav" class="icons">
          <a @click="userLogin">Profile<img src="../assets/icons/profile-icon.png" alt="">
          </a>
        </li>
        <li @click="toggleBurgerNav" class="icons">
          <RouterLink to="/leaderboard">Leaderboard<img src="../assets/icons/crown-icon.png" alt="">
          </RouterLink>
        </li>
        <li @click="toggleBurgerNav" class="icons">
          <RouterLink to="/contact">Contact<img src="../assets/icons/letter-icon.png" alt=""></RouterLink>
        </li>
      </ul>

    </nav>
  </header>
</template>

<style scoped>
.dropdown-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.dropdown-nav>li {
  margin: 20px 20px 10px 20px;
  width: 300px;
  border-bottom: solid #3a5e572d 2px;
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
  position: sticky;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;


}

#logo {
  height: 100px;
  cursor: pointer;
}

img {
  height: 32px;
  margin-left: 10px;
}


#profile,
#burger {
  height: 32px;
  margin: 10px 20px;
  cursor: pointer;
}

#burger {
  height: 45px;

}

a {
  font-size: 20px;
  text-decoration: none;
  color: #3a5e57;
  font-size: 30px;
}

nav {
  box-shadow: 0px 3px 10px #00000070;
  margin-bottom: 3em;
  padding-bottom: 2em;

}
</style>
