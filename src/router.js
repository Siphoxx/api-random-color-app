import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import ColorView from './views/ColorView.vue';
import ProjectsView from './views/ProjectsView.vue';
import ProjectDetailView from './views/ProjectDetailView.vue'; // 👈 1. Import the new details view

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
  },
  {
    path: '/showcase',
    name: 'showcase',
    component: ProjectsView
  },
  {
    path: '/showcase/:id', // 👈 2. The colon (:) tells Vue that 'id' is a dynamic variable!
    name: 'projectDetail',
    component: ProjectDetailView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;