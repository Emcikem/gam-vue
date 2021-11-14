import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter)

// 配置导出路由
export default new VueRouter({
  routes: [
    {
      path: '/menu',
      name: '导航栏',
      component: () => import('@/components/Menu')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home'),
      children: [
        {
          path: '/service',
          name: '服务',
          component: () => import('@/views/Service')
        },
        {
          path: '/create',
          name: '注册用户',
          component: () => import('@/components/CreateUser')
        },
        {
          path: '/text',
          name: '测试',
          component: () => import('@/components/MyTest')
        }
      ]
    }
  ]
})
