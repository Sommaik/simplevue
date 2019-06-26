<template>
  <div>
    <b-form @submit.prevent="onFormSubmit">
      <b-form-group
        id="input-group-userId"
        label="User Id:"
        label-for="userId"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="userId"
          v-model="userId"
          type="text"
          placeholder="Enter user"
        ></b-form-input>
      </b-form-group>
      <input id="password" v-model="password" type="password" />
      <button type="submit">Login</button>
    </b-form>
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
      this.$router.replace("/register");
    },
    onFormSubmit() {
      axios
        .post("http://localhost:3000/login", {
          userId: this.userId,
          password: this.password
        })
        .then(resp => {
          if (resp.data.success) {
            this.$router.replace("/admin/user/list");
          } else {
            alert("warning " + resp.data.msg);
          }
        })
        .catch(reason => {
          alert("error " + reason);
        });
    }
  }
};
</script>
<style></style>
