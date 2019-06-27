import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/stores/auth";
import Register from "@/stores/register";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
    register: Register
  },
  state: {},
  mutations: {},
  actions: {}
});
