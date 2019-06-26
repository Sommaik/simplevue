<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="12" sm="12" md="6" lg="4" xl="2">
          <b-form @submit.prevent="onFormSubmit">
            <b-form-group
              id="input-group-userId"
              label="User Id:"
              label-for="userId"
              description="We'll never share your email with anyone else."
            >
              <b-form-input id="userId" v-model="userId" type="text" placeholder="Enter user"></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-password" label="Password:" label-for="password">
              <b-form-input
                id="password"
                v-model="password"
                type="password"
                placeholder="Enter Password"
              ></b-form-input>
            </b-form-group>
            <button type="submit">Login</button>
          </b-form>
        </b-col>
      </b-row>
      <button id="register" @click="onRegisterClick">Register new account</button>
    </b-container>
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
