<script setup>
import { usersRef, db } from "../firebase";
import { onValue, set, ref as dbref } from "firebase/database";
import { ref } from "vue";

const data = ref(null);

onValue(usersRef, (snapshot) => {
  data.value = snapshot.val();
  console.log(data.value);
});
</script>
