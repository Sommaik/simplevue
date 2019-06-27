import axios from "axios";
const Auth = {
  namespaced: true,
  state: {
    isAuthen: false,
    name: "",
    token: ""
  },
  mutations: {
    loginsuccess(state, payload) {
      state.isAuthen = true;
      state.name = payload.name;
      state.token = payload.token;
      sessionStorage.setItem("USER_TOKEN", payload);
    },
    initial(state) {
      if (sessionStorage.getItem("USER_TOKEN")) {
        state.commit("loginsuccess", sessionStorage.getItem("USER_TOKEN"));
      }
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
    }
  }
};

export default Auth;
