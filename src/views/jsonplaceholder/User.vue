<template>
  <b-container fluid>
    <b-table :items="users" :fields="fields">
      <template slot="post" scope="row">
        <b-button variant="link" @click="onPostClick(row.item.id)"
          >Post</b-button
        >
      </template>
      <template slot="todo" scope="row">
        <b-button variant="link" @click="onTodoClick(row.item.id)"
          >Todo</b-button
        >
      </template>
      <template slot="album" scope="row">
        <b-button variant="link" @click="onAlbumClick(row.item.id)"
          >Album</b-button
        >
      </template>
    </b-table>
  </b-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState("jph", ["users"])
  },
  methods: {
    ...mapActions("jph", ["loaduser"]),
    onPostClick(userId) {
      this.$router.push("/admin/jsonplaceholder/posts/" + userId);
    },
    onTodoClick(userId) {
      console.log("not implement");
    },
    onAlbumClick(userId) {
      console.log("not implement");
    }
  },
  beforeMount() {
    this.loaduser();
  },
  data() {
    return {
      fields: ["name", "username", "email", "post", "todo", "album"]
    };
  }
};
</script>

<style>
</style>
