import Vue from 'vue'
import Router from 'vue-router'
import HomeText from '../client/src/component/HomeText'
import SignIn from '../client/src/component/SignIn'
import Posts from '../client/src/component/Posts'
import App from '../client/src/App.vue'
import Results from '../client/src/component/Results'
import MyProfile from '../client/src/component/MyProfile'




Vue.use(Router)

const routes = [
  {path: '/', component: HomeText},
  {path: '/signin', component: SignIn},
  {path: '/posts', component: Posts},
  {path: '/results', component: Results},
  {path: '/myprofile', component: MyProfile},
];

const router = new Router({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
