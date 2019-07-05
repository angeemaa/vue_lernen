import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/:id',
      name: 'home',
      component: Home
    },
  {
      path: '/:id/:andere',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: function () {
        return import('./views/About.vue')
      }
    }
  ]
})