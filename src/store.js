import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/stores/auth";
import Register from "@/stores/register";
import User from "@/stores/user";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
    register: Register,
    user: User
  },
  state: {},
  mutations: {},
  actions: {}
});
