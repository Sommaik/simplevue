import axios from "axios";
const Auth = {
  state: {},
  actions: {
    async login(context, user) {
      return new Promise((resolve, reject) => {
        axios
          .post("http://localhost:3000/login", user)
          .then(resp => resolve(resp.data))
          .catch(reason => reject(reason));
      });
    }
  }
};

export default Auth;
