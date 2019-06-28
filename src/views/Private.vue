<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item-dropdown text="Example">
            <b-dropdown-item to="/admin/user/list">User</b-dropdown-item>
            <b-dropdown-item to="/admin/post">Post</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content"
              ><em>{{ name }}</em></template
            >
            <b-dropdown-item @click="onLogout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import store from "@/store";
import { mapActions, mapState } from "vuex";

export default {
  beforeRouteEnter(to, from, next) {
    if (store.state.auth.isAuthen) {
      next();
    } else {
      next("/login");
    }
  },
  computed: {
    ...mapState("auth", ["name"])
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    onLogout() {
      this.logout().then(result => {
        if (result) this.$router.replace("/login");
      });
    }
  }
};
</script>

<style></style>
