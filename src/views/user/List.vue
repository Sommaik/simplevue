<template>
  <h1>User List {{ name }}</h1>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("auth", ["name", "token"])
  }
};
</script>

<style></style>
