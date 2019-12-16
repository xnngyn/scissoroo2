import Vue from 'vue'
import Router from 'vue-router'
import HomeNichtEingeloggt from '@/components/HomeNichtEingeloggt'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Scissoroo',
      component: HomeNichtEingeloggt
    }
  ],
  mode: 'history'
})
