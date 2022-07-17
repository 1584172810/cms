import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import LocalCatch from '@/utils/cache'
import store from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/view/login/login.vue'),
    children: []
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('@/view/main/main.vue'),
    children: []
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/view/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCatch.getCatch('token')
    if (!token) {
      return '/login'
    }
  }

  if (to.path === '/main/') {
    return '/main/analysis/dashboard'
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}
export default router
