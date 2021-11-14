import Vue from 'vue'
import VueRouter from 'vue-router'

import CreateUser from '@/components/CreateUser'
import Test from '@/components/MyTest'
import ServiceTable from '@/components/ServiceTable'
import CreateService from '@/components/CreateService'

// 安装路由
Vue.use(VueRouter)

// 配置导出路由
export default new VueRouter({
  routes: [
    {
      path: '/create',
      name: '注册用户',
      component: CreateUser
    },
    {
      path: '/text',
      name: '测试',
      component: Test
    },
    {
      path: '/service',
      name: '服务',
      component: ServiceTable
    },
    {
      path: '/createservice',
      name: '添加服务',
      component: CreateService
    }
  ]
})
