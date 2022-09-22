import { defineStore } from "pinia";

export const useInf = defineStore({
  id: "inf",
  state: () => ({
    loggedIn: false,
  }),
  getters: {},
  actions: {
    // setLang(to_lang) {
    //   this.lang = to_lang;
    // },

    login() {
      this.loggedIn = true;
    },
  },
});
