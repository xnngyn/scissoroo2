<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.

    
  </div>
</template>

<script>
import PostService from '@/services/PostService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () {
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostService.fetchResults()
      this.posts = response.data
    }
  }
}
</script>