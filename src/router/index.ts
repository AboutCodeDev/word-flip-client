import ThemesPage from '@/pages/ThemesPage.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Themes',
      path: '/',
      component: ThemesPage,
    },
  ],
});

export default router;
