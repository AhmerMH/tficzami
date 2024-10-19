import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

/*** Components ***/
import ButtonDemo from '@/components/button/demo/ButtonDemo.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/components/button',
    name: 'button',
    component: ButtonDemo,
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
