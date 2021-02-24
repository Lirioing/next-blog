import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    redirect: '/index'
  },
  {
    path: '/index',
    name: '首页',
    component: () => import('@/views/index/index.vue')
  },
  {
    path: '/articles',
    name: '文章',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/thoughts',
    name: '感想',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/about',
    name: '关于',
    component: () => import('@/views/about/index.vue')
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/index/index.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
