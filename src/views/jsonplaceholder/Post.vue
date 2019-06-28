<template>
  <b-container fluid>
    <b-table :items="posts" :fields="['userId', 'id', 'title', 'body']"> </b-table>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState("jph", ["posts"])
  },
  methods: {
    ...mapActions("jph", ["loadpost"])
  },
  beforeMount() {
    this.loadpost();
  }
};
</script>

<style></style>
