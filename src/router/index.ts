import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Account = () => import('../views/AccountView.vue')
const ScreenBroadcaster = () => import('../views/ScreenBroadcasterView.vue')
const ScreenViewer = () => import('../views/ScreenViewerView.vue')
const NotFound = () => import('../views/NotFoundView.vue')

const routes = [
  {
    path: '/',
    name: 'viewer',
    component: ScreenViewer,
    alias: '/viewer',
  },
  {
    path: '/broadcast',
    name: 'broadcast',
    component: ScreenBroadcaster,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
] as RouteRecordRaw[]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
