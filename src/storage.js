import { defineStore } from "pinia";

export const useStorage = defineStore("user", {
  state: () => ({
    user: {
      username: null,
      isLoggedIn: false,
      score: null,
    },
  }),
});
