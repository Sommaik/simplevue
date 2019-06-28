<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }" exact-active-class="active">Home</b-nav-item>
            <b-nav-item to="/about" exact-active-class="active">About</b-nav-item>
            <b-nav-item to="/login" exact-active-class="active">Login</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <div class="mt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
