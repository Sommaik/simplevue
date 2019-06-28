import axios from "axios";
const SESSIONID = "USER_TOKEN";

const Auth = {
  namespaced: true,
  state: {
    isAuthen: !!sessionStorage.getItem(SESSIONID),
    name: "",
    token: ""
  },
  mutations: {
    loginsuccess(state, payload) {
      state.isAuthen = true;
      state.name = payload.name;
      state.token = payload.token;
      sessionStorage.setItem(SESSIONID, JSON.stringify(payload));
    },
    logoutsuccess(state) {
      state.isAuthen = false;
      state.name = "";
      state.token = "";
      sessionStorage.removeItem(SESSIONID);
    }
  },
  actions: {
    async login(context, user) {
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_REMOTE_API + "/login", user)
          .then(resp => {
            if (resp.data.success) {
              context.commit("loginsuccess", resp.data);
            }
            resolve(resp.data);
          })
          .catch(reason => reject(reason));
      });
    },
    async initial(context) {
      if (sessionStorage.getItem(SESSIONID)) {
        const payload = JSON.parse(sessionStorage.getItem(SESSIONID));
        context.commit("loginsuccess", payload);
      }
    },
    async logout(context) {
      context.commit("logoutsuccess");
      return Promise.resolve(true);
    }
  }
};

export default Auth;
