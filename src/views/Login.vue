<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="12" md="8" lg="6" xl="4">
          <b-form @submit.prevent="onFormSubmit">
            <b-form-group
              id="input-group-userId"
              label="User Id:"
              label-for="userId"
              description="We'll never share your email with anyone else."
            >
              <b-form-input
                id="userId"
                v-model="$v.userForm.userId.$model"
                :state="$v.userForm.userId.$dirty ? !$v.userForm.userId.$error : null"
                type="text"
                placeholder="Enter user"
              ></b-form-input>
              <b-form-invalid-feedback id="userId-feedback"
                >This is a required field.</b-form-invalid-feedback
              >
            </b-form-group>
            <b-form-group id="input-group-password" label="Password:" label-for="password">
              <b-form-input
                id="password"
                v-model="$v.userForm.password.$model"
                :state="$v.userForm.password.$dirty ? !$v.userForm.password.$error : null"
                type="password"
                placeholder="Enter Password"
              ></b-form-input>
              <b-form-invalid-feedback id="password-feedback"
                >This is a required field and must be at least 6
                characters.</b-form-invalid-feedback
              >
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
          </b-form>
        </b-col>
      </b-row>
      <b-row class="justify-content-center">
        <b-col cols="12" sm="12" md="8" lg="6" xl="4">
          <b-button variant="link" id="register" @click="onRegisterClick"
            >Register new account</b-button
          >
        </b-col>
      </b-row>
      <b-modal id="modal-alert" title="Warning" ok-only>
        <p class="my-4">{{ errorMessage }}</p>
      </b-modal>
    </b-container>
  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data: function() {
    return {
      userForm: {
        userId: "",
        password: ""
      },
      errorMessage: ""
    };
  },
  validations: {
    userForm: {
      userId: { required },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    ...mapActions("auth", ["login"]),
    onRegisterClick() {
      this.$router.replace("/register");
    },
    onFormSubmit() {
      if (!this.$v.userForm.$invalid) {
        this.login(this.userForm).then(resp => {
          if (resp.success) {
            this.$router.replace("/admin/user/list");
          } else {
            this.errorMessage = "User not found..";
            this.$bvModal.show("modal-alert");
          }
        });
      } else {
        this.errorMessage = "Please do something";
        this.$bvModal.show("modal-alert");
      }
    }
  }
};
</script>
<style></style>
