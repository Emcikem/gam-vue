import Vue from 'vue'
import Router from 'vue-router'
import CreateUser from '@/components/Create'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'create',
      component: CreateUser
    }
  ]
})
