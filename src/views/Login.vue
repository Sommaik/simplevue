<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <input id="userId" v-model="userId" />
      <input id="password" v-model="password" type="password" />
      <button type="submit">Login</button>
    </form>
    <button id="register" @click="onRegisterClick">Register new account</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    onRegisterClick() {
      console.log("in login class");
      this.$route.replace("/register");
    },
    onFormSubmit() {
      axios
        .post("http://localhost:3000/login", { userId: this.userId, password: this.password })
        .then(resp => {
          if (resp.data.success) {
            this.$route.replace("/admin/user/list");
          } else {
            alert("warning " + resp.data.msg);
          }
        })
        .catch(reason => {
          alert("error " + reason);
          // console.log(reason);
        });
    }
  }
};
</script>
<style></style>
