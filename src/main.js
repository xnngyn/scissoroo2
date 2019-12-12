import Vue from 'vue'
import Router from 'vue-router'
import Home from '../client/app/component/Home'
import SignIn from '../client/app/component/SignIn'
import Posts from '../client/app/component/Posts'
import App from '../client/app/App.vue'

Vue.use(Router)

const routes = [
  {path: '/', component: Home},
  {path: '/signin', component: SignIn},
  {path: '/posts', component: Posts}
];

const router = new Router({
    routes
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
