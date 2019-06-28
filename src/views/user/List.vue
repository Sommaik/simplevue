<template>
  <b-container fluid>
    <h1>User List {{ name }}</h1>
    <b-table striped hover :items="users" :fields="fields">
      <template slot="edit">
        <b-button variant="link">Edit</b-button>
      </template>
    </b-table>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  beforeMount() {
    this.loadUser();
  },
  data() {
    return {
      fields: ["userId", "name", "edit"]
    };
  },
  computed: {
    ...mapState("auth", ["name", "token"]),
    ...mapState("user", ["users"])
  },
  methods: {
    ...mapActions("user", ["loadUser"])
  }
};
</script>

<style></style>
