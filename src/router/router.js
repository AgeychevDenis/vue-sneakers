import AppMain from '@/pages/AppMain.vue';
import AppFavorites from '@/pages/AppFavorites.vue';
import AppUser from '@/pages/AppUser.vue'
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      component: AppMain
   },
   {
      path: '/favorites',
      component: AppFavorites
   },
   {
      path: '/user',
      component: AppUser
   }
];

const router = createRouter({
   routes,
   history: createWebHistory(process.env.BASE_URL)
});

export default router;