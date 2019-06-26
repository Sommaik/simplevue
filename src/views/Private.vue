<template>
  <router-view></router-view>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    // next("login");
    next();
  }
};
</script>

<style></style>
