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
    }
  }
};

export default User;
