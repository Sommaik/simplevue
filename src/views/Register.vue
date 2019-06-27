<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col cols="12" sm="12" md="6" lg="4" xl="2">
        <b-form @submit.prevent="onFormSubmit">
          <b-form-group
            id="input-group-userId"
            label="User Id:"
            label-for="userId"
          >
            <b-form-input
              id="userId"
              v-model="$v.registerForm.userId.$model"
              :state="
                $v.registerForm.userId.$dirty
                  ? !$v.registerForm.userId.$error
                  : null
              "
              type="text"
              placeholder="Enter user"
            ></b-form-input>
            <b-form-invalid-feedback id="userId-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group id="input-group-name" label="Name:" label-for="name">
            <b-form-input
              id="name"
              v-model="$v.registerForm.name.$model"
              :state="
                $v.registerForm.name.$dirty
                  ? !$v.registerForm.name.$error
                  : null
              "
              type="text"
              placeholder="Enter name"
            ></b-form-input>
            <b-form-invalid-feedback id="name-feedback"
              >This is a required field.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            id="input-group-password"
            label="Password:"
            label-for="password"
          >
            <b-form-input
              id="password"
              v-model="$v.registerForm.password.$model"
              :state="
                $v.registerForm.password.$dirty
                  ? !$v.registerForm.password.$error
                  : null
              "
              type="password"
              placeholder="Enter Password"
            ></b-form-input>
            <b-form-invalid-feedback id="password-feedback"
              >This is a required field and must be at least 6
              characters.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-form-group
            id="input-group-re-password"
            label="Re Password:"
            label-for="repassword"
          >
            <b-form-input
              id="repassword"
              v-model="$v.registerForm.repassword.$model"
              :state="
                $v.registerForm.repassword.$dirty
                  ? !$v.registerForm.repassword.$error
                  : null
              "
              type="password"
              placeholder="Re Enter Password"
            ></b-form-input>
            <b-form-invalid-feedback id="repassword-feedback"
              >This is a required field and must be
              match.</b-form-invalid-feedback
            >
          </b-form-group>
          <b-button type="submit" variant="primary">Register</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      registerForm: {
        userId: "",
        name: "",
        password: "",
        repassword: ""
      }
    };
  },
  validations: {
    registerForm: {
      userId: { required },
      name: { required },
      password: { required, minLength: minLength(6) },
      repassword: { sameAs: sameAs("password") }
    }
  },
  methods: {
    onFormSubmit() {}
  }
};
</script>

<style></style>
