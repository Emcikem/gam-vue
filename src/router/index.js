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
      meta: {title: '导航栏'},
      component: () => import('@/components/Menu')
    },
    {
      path: '/',
      name: 'home',
      meta: {title: '首页'},
      component: () => import('@/views/Home'),
      children: [
        {
          path: '/service',
          name: '服务',
          meta: {title: '服务管理'},
          component: () => import('@/views/Service')
        },
        {
          path: '/user',
          name: '用户管理',
          meta: {title: '用户管理'},
          component: () => import('@/views/User')
        },
        {
          path: '/equipment',
          name: '设备管理',
          meta: {title: '设备管理'},
          component: () => import('@/views/Equipment')
        }
      ]
    }
  ]
})
