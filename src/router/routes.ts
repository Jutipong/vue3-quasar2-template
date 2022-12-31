import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('layouts/DefaultLayout.vue'),
    children: [{ path: '', component: () => import('@/pages/Login.vue') }],
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('@/pages/IndexPage.vue') }],
  },
  {
    path: '/master',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'user', component: () => import('@/pages/master/user.vue') },
      { path: 'role', component: () => import('@/pages/master/role.vue') },
    ],
  },
  {
    path: '/config',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'user', component: () => import('@/pages/config/user.vue') },
      { path: 'role', component: () => import('@/pages/config/role.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
