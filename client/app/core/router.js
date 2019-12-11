import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../component/Hello'
import Posts from '../component/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})