import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import MainLayout from '@/layout/MainLayout.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: MainLayout },
      component: HomeView,
    },
    {
      path: '/eurojackpot',
      name: 'eurojackpot',
      meta: { layout: MainLayout },
      component: () => import('../views/EurojackpotView.vue'),
    },
  ],
});

export default router;
