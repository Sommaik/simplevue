import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/stores/auth";
import Register from "@/stores/register";
import User from "@/stores/user";
import JsonPlaceHolder from "@/stores/jsonplaceholder";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth,
    register: Register,
    user: User,
    jph: JsonPlaceHolder
  },
  state: {},
  mutations: {},
  actions: {}
});
