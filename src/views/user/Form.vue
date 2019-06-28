<template>
  <b-container fluid>
    <b-row class="justify-content-center">
      <b-col cols="12" sm="12" md="8" lg="6" xl="4">
        <b-form @submit.prevent="onFormSubmit">
          <b-form-group
            id="input-group-userId"
            label="User Id:"
            label-for="userId"
          >
            <b-form-input
              id="userId"
              v-model="$v.userForm.userId.$model"
              :state="
                $v.userForm.userId.$dirty ? !$v.userForm.userId.$error : null
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
              v-model="$v.userForm.name.$model"
              :state="$v.userForm.name.$dirty ? !$v.userForm.name.$error : null"
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
              v-model="$v.userForm.password.$model"
              :state="
                $v.userForm.password.$dirty
                  ? !$v.userForm.password.$error
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
              v-model="$v.userForm.repassword.$model"
              :state="
                $v.userForm.repassword.$dirty
                  ? !$v.userForm.repassword.$error
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
          <b-button type="submit" variant="primary">Save</b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-modal id="modal-alert" title="Warning" ok-only>
      <p class="my-4">{{ errorMessage }}</p>
    </b-modal>
  </b-container>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";
import { mapActions } from "vuex";
export default {
  data() {
    return {
      errorMessage: "",
      userForm: {
        userId: "",
        name: "",
        password: "",
        repassword: ""
      }
    };
  },
  validations: {
    userForm: {
      userId: { required },
      name: { required },
      password: { required, minLength: minLength(6) },
      repassword: { sameAs: sameAs("password") }
    }
  },
  methods: {
    ...mapActions("user", ["getUserById", "saveUser"]),
    onFormSubmit() {
      if (!this.$v.userForm.$invalid) {
        this.saveUser({
          id: this.$route.params.id,
          body: this.userForm
        })
          .then(resp => this.$router.push("/admin/user/list"))
          .catch(reason => {
            this.errorMessage = "Something wrong please try again";
            this.$bvModal.show("modal-alert");
          });
      } else {
        this.errorMessage = "Please verified data";
        this.$bvModal.show("modal-alert");
      }
    }
  },
  beforeMount() {
    this.getUserById(this.$route.params.id).then(resp => {
      this.userForm = resp;
    });
  }
};
</script>

<style></style>
