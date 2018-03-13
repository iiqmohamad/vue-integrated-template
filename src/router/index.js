import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import auth from './auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
      meta: { requiresAuth: true }
    },
    ...auth
  ]
})
