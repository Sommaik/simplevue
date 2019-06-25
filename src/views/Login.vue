<template>
  <div>
    <form @submit.prevent="onFormSubmit">
      <input id="userId" v-model="userId">
      <input id="password" type="password" v-model="password">
      <button type="submit" @click="onFormSubmit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      userId: "",
      password: ""
    };
  },
  methods: {
    onFormSubmit() {
      console.log("on form submit");
    }
  }
};
</script>

<style>
</style>
