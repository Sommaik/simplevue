<template>
  <b-container fluid>
    <b-table :items="posts" :fields="fields">
      <template slot="comment" scope="row">
        <b-button variant="link" @click="onCommentClick(row.item.id)"
          >comment</b-button
        >
      </template>
    </b-table>
  </b-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      fields: ["userId", "id", "title", "body", "comment"]
    };
  },
  computed: {
    ...mapState("jph", ["posts"])
  },
  methods: {
    ...mapActions("jph", ["loadpost"]),
    onCommentClick(postId) {
      console.log(postId);
      console.log("not implement");
    }
  },
  beforeMount() {
    this.loadpost(this.$route.params.userId);
  }
};
</script>

<style></style>
