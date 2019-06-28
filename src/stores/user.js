import axios from "axios";
const User = {
  namespaced: true,
  state: {
    users: []
  },
  mutations: {
    loadusersuccess(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    async loadUser(context) {
      axios.get(process.env.VUE_APP_REMOTE_API + "/user").then(resp => {
        context.commit("loadusersuccess", resp.data);
      });
    },
    async getUserById(context, payload) {
      return new Promise((resolve, reject) => {
        const headers = {
          Authorization: "jwt " + context.rootState.auth.token
        };
        axios
          .get(process.env.VUE_APP_REMOTE_API + "/user/" + payload, {
            headers
          })
          .then(resp => {
            resolve(resp.data);
          })
          .catch(reason => reject(reason));
      });
    },
    async saveUser(context, payload) {
      return new Promise((resolve, reject) => {
        const headers = {
          Authorization: "jwt " + context.rootState.auth.token
        };
        axios
          .put(process.env.VUE_APP_REMOTE_API + "/user/" + payload.id, payload.body, {
            headers
          })
          .then(resp => resolve(resp.data))
          .catch(reason => reject(reason));
      });
    }
  }
};

export default User;
