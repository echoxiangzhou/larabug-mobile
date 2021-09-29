import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'
import protectedRoute from "@/middleware/protectedRoute";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/dashboard'
  },
  {
    path: '/login',
    component: () => import('@/views/Auth/Login.vue')
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: '/tabs/dashboard'
      },
      {
        path: 'dashboard',
        component: () => import('@/views/Dashboard.vue'),
        beforeEnter: protectedRoute
      },
      {
        path: 'dashboard/exceptions/:exceptionId',
        component: () => import('@/views/Exceptions/Show.vue'),
        beforeEnter: protectedRoute
      },
      {
        path: 'projects',
        component: () => import('@/views/Projects.vue'),
        beforeEnter: protectedRoute
      },
      {
        path: 'projects/:id',
        component: () => import('@/views/Project/Exceptions.vue'),
        beforeEnter: protectedRoute
      },
      {
        path: 'projects/:id/exceptions/:exceptionId',
        component: () => import('@/views/Exceptions/Show.vue'),
        beforeEnter: protectedRoute
      },
      {
        path: 'account',
        component: () => import('@/views/Account.vue'),
        beforeEnter: protectedRoute
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
