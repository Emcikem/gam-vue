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
      path: '/home',
      name: 'home',
      meta: {title: '首页'},
      component: () => import('@/views/Home'),
      children: [
        {
          path: '/service',
          name: '服务',
          meta: {title: '服务'},
          component: () => import('@/views/Service')
        },
        {
          path: '/create',
          name: '用户管理',
          meta: {title: '注册用户'},
          component: () => import('@/components/CreateUser')
        },
        {
          path: '/text',
          name: '设备管理',
          meta: {title: '测试'},
          component: () => import('@/components/MyTest')
        }
      ]
    }
  ]
})
