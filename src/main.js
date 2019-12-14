import Vue from 'vue'
import Router from 'vue-router'
import HomeText from '../client/app/component/HomeText'
import SignIn from '../client/app/component/SignIn'
import Posts from '../client/app/component/Posts'
import App from '../client/app/App.vue'
import Results from '../client/app/component/Results'
import MyProfile from '../client/app/component/MyProfile'




Vue.use(Router)

const routes = [
  {path: '/', component: HomeText},
  {path: '/signin', component: SignIn},
  {path: '/posts', component: Posts},
  {path: '/results', component: Results},
  {path: '/myprofile', component: MyProfile},
  {path: '/register', component: SignUp}
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
