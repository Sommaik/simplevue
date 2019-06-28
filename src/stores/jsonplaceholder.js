import axios from "axios";

const JsonPlaceHolder = {
  namespaced: true,
  state: {
    users: [],
    posts: []
  },
  mutations: {
    loadpostsuccess(state, payload) {
      state.posts = payload;
    },
    loadusersuccess(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    async loadpost(context, payload) {
      axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + payload).then(resp => {
        context.commit("loadpostsuccess", resp.data);
      });
    },
    async loaduser(context) {
      axios.get("https://jsonplaceholder.typicode.com/users").then(resp => {
        context.commit("loadusersuccess", resp.data);
      });
    }
  }
};

export default JsonPlaceHolder;
