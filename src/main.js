import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import { VueFire } from "vuefire";

import "./style.css";
import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebase";



const pinia = createPinia();

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("user", JSON.stringify(state.user));
  },
  { deep: true }
);

createApp(App)
  .use(router)
  .use(pinia)
  .use(VueFire, { firebaseApp })
  .mount("#app");
