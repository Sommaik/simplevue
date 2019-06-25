<template>
  <router-view></router-view>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    next('login');
  },
};
</script>

<style>
</style>
