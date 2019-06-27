<template>
  <router-view></router-view>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store.js";

export default {
  beforeRouteEnter(to, from, next) {
    if (store.state.auth.isAuthen) {
      next();
    } else {
      next("login");
    }
  }
};
</script>

<style></style>
