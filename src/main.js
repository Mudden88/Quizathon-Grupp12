import { createApp, watch } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";

const pinia = createPinia();

watch(
  pinia.state,
  (state) => {
    localStorage.setItem("user", JSON.stringify(state.user));
  },
  { deep: true }
);

createApp(App).use(router).use(pinia).mount("#app");
