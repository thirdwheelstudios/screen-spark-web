import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const Home = () => import('../views/HomeView.vue')
const Account = () => import('../views/AccountView.vue')
const ScreenBroadcaster = () => import('../views/ScreenBroadcasterView.vue')
const ScreenViewer = () => import('../views/ScreenViewerView.vue')
const Login = () => import('../views/LoginView.vue')
const NotFound = () => import('../views/NotFoundView.vue')

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/viewer',
    name: 'viewer',
    component: ScreenViewer,
    alias: '/viewer',
  },
  {
    path: '/broadcast/:receiverId',
    name: 'broadcast',
    props: true,
    component: ScreenBroadcaster,
  },
  {
    path: '/account',
    name: 'account',
    component: Account,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
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
