import { defineStore } from "pinia";

export const useStorage = defineStore("user", {
  state: () => {
    if (localStorage.getItem("user"))
      return JSON.parse(localStorage.getItem("user"));
    return {
      user: {
        username: null,
        isLoggedIn: false,
        score: null,
      },
    };
  },
});
