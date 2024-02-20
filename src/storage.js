import { defineStore } from "pinia";

export const useStorage = defineStore("user", {
  state: () => {
    return {
      user: {
        username: null,
        isLoggedIn: false,
        score: null,
      },
    };
  },
});
