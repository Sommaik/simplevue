<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="12" md="6" lg="4" xl="2">
          <b-form @submit.prevent="onFormSubmit">
            <b-form-group
              id="input-group-userId"
              label="User Id:"
              label-for="userId"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="userId"
                v-model="$v.userId.$model"
                :state="$v.userId.$dirty ? !$v.userId.$error : null"
                type="text"
                placeholder="Enter user"
              ></b-form-input>
              <b-form-invalid-feedback id="userId-feedback">
                This is a required field.
              </b-form-invalid-feedback>
            </b-form-group>
            <b-form-group id="input-group-password" label="Password:" label-for="password">
              <b-form-input
                id="password"
                v-model="$v.password.$model"
                :state="$v.password.$dirty ? !$v.password.$error : null"
                type="password"
                placeholder="Enter Password"
              ></b-form-input>
              <b-form-invalid-feedback id="password-feedback">
                This is a required field and must be at least 6 characters.
              </b-form-invalid-feedback>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="12" md="6" lg="4" xl="2">
          <b-button variant="link" id="register" @click="onRegisterClick"
            >Register new account</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import { required, minLength } from "vuelidate/lib/validators";

export default {
  data: function() {
    return {
      userId: "",
      password: ""
    };
  },
  validations: {
    userId: { required },
    password: { required, minLength: minLength(6) }
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
