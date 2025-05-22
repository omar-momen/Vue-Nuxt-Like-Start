import { createRouter, createWebHistory } from 'vue-router';

import generatedPages from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import { setupGuards } from './guards';

const routes = setupLayouts(generatedPages);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Add navigation guards
router.beforeEach((to, from, next) => {
  setupGuards(to, from, next);
});

export default router;
