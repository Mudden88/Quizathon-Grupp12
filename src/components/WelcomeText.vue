<script setup>

import { useStorage } from '../storage'
import { ref, watch, onMounted} from 'vue'



const fromStorage = useStorage(),
visible = ref(null)

const loggedIn = ref(fromStorage.user.isLoggedIn)
const test = ref(JSON.parse(localStorage.getItem('user'))).value.user.isLoggedIn
const test2 = ref(test)
console.log(test)

// const token = ref(localStorage.getItem('token') || undefined)
// watch(token, newValue => {
//     if (!newValue) localStorage.removeItem('token')
//     else localStorage.setItem('token', newValue)
// })
watch(test2, (newValue) => {
  if (test2){
  visible.value = true
  setTimeout(() => {
    visible.value = false
    }, 3000)
  }
});

</script>

<!-- <template> -->
  <!-- Att endast visa meddelandet ett visst antal sekunder om användaren är inloggad -->
<!-- <h1 v-if="visible">
  Welcome {{ fromStorage.user.username }}!
</h1>
</template> -->