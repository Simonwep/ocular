import { createRouter, createWebHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/dashboard',
      alias: '/',
      component: () => import('./app/pages/dashboard/Dashboard.vue'),
      children: [
        {
          path: 'overview',
          component: () => import('./app/pages/dashboard/overview/Overview.vue')
        },
        {
          path: 'summary',
          component: () => import('./app/pages/dashboard/summary/Summary.vue')
        }
      ]
    },
    {
      path: '/income',
      component: () => import('./app/pages/income/Income.vue')
    },
    {
      path: '/expenses',
      component: () => import('./app/pages/expenses/Expenses.vue')
    }
  ]
});