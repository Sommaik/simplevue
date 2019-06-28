import axios from "axios";

const JsonPlaceHolder = {
  namespaced: true,
  state: {
    posts: []
  },
  mutations: {
    loadpostsuccess(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    async loadpost(context) {
      axios.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
        context.commit("loadpostsuccess", resp.data);
      });
    }
  }
};

export default JsonPlaceHolder;
