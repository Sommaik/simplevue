import Vue from "vue";
import Vuex from "vuex";
import Auth from "@/stores/auth";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: Auth
  },
  state: {},
  mutations: {},
  actions: {}
});
