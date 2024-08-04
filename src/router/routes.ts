import HomeView from '@/views/HomeView.vue';
import MainLayout from '@/layout/MainLayout.vue';

export const routes = [
  {
    path: '/',
    name: 'home',
    label: 'Start',
    meta: { layout: MainLayout },
    component: HomeView,
  },
  {
    path: '/eurojackpot',
    name: 'eurojackpot',
    label: 'Eurojackpot',
    meta: { layout: MainLayout },
    component: () => import('../views/EurojackpotView.vue'),
  },
];
