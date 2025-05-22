import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordNormalized } from 'vue-router';

import { useAuthStore } from '@/stores/auth';

export async function setupGuards(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const authStore = useAuthStore();

  // Skip auth check if we're already on the login page
  if (to.path === '/auth/login') {
    if (authStore.isAuthenticated) {
      next({ path: '/' });
    } else {
      next();
    }
    return;
  }

  // Check auth state for protected routes
  const requiresAuth = to.matched.some((record: RouteRecordNormalized) => record.meta.requiresAuth);

  if (requiresAuth) {
    try {
      const isAuthenticated = await authStore.checkAuth();

      if (!isAuthenticated) {
        next({ path: '/auth/login', query: { redirect: to.fullPath } });
        return;
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      next({ path: '/auth/login', query: { redirect: to.fullPath } });
      return;
    }
  }

  next();
}
