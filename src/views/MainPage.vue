<template>
  <div class="main list-container contents">
    <h1 class="page-header">Today I Learned</h1>
    <ul>
      <post-list-item
        v-for="postItem in postItems"
        :key="postItem._id"
        :postItem="postItem"
      ></post-list-item>
    </ul>
  </div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import { fetchPosts } from '@/api';

export default {
  components: {
    PostListItem,
  },
  data() {
    return {
      postItems: [],
    };
  },
  methods: {
    async fetchNotes() {
      const { data } = await fetchPosts();
      this.postItems = data.posts;
    },
  },
  created() {
    this.fetchNotes();
  },
};
</script>

<style></style>
