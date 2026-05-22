import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ColorView from './views/ColorView.vue';

// 1. Define the URL routes and map them to our page components
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/color-mixer',
    name: 'colorMixer',
    component: ColorView
  }
];

// 2. Create the router instance
const router = createRouter({
  // This enables clean URLs without hashes (e.g., /color-mixer instead of /#/color-mixer)
  history: createWebHistory(),
  routes
});

export default router;