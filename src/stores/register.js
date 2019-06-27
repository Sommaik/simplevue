import axios from "axios";

const Register = {
  namespaced: true,
  actions: {
    async register(context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(process.env.VUE_APP_REMOTE_API + "/user", payload)
          .then(resp => resolve(resp.data))
          .catch(reason => reject(reason));
      });
    }
  }
};

export default Register;
