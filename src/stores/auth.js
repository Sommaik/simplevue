import axios from "axios";
const Auth = {
  namespaced: true,
  state: {},
  actions: {
    async login(context, user) {
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_REMOTE_API + "/login", user)
          .then(resp => resolve(resp.data))
          .catch(reason => reject(reason));
      });
    }
  }
};

export default Auth;
