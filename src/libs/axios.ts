import axios, { type AxiosInstance } from 'axios';
import { useLoadingStore } from '@/stores/loading';
import { useAuthStore } from '@/stores/auth';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use((config) => {
  const loadingStore = useLoadingStore();
  const authStore = useAuthStore();

  loadingStore.setHttpCallRunning(true);

  if (authStore.token) {
    config.headers.Authorization = `Bearer ${authStore.token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    const loadingStore = useLoadingStore();
    loadingStore.setHttpCallRunning(false);
    return response;
  },
  async(error) => {
    const loadingStore = useLoadingStore();
    loadingStore.setHttpCallRunning(false);

    const originalRequest = error.config;
    const authStore = useAuthStore();

    // If error is 401 and we haven't tried to refresh the token yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      // Don't retry if this is already a refresh token request
      if (originalRequest.url?.includes('/auth/refresh')) {
        await authStore.logout();
        return Promise.reject(error);
      }

      originalRequest._retry = true;

      try {
        // Try to refresh the token
        const success = await authStore.refreshAccessToken();

        if (success) {
          // Update the authorization header with the new token
          originalRequest.headers.Authorization = `Bearer ${authStore.token}`;
          // Retry the original request
          return axiosInstance(originalRequest);
        } else {
          // If refresh failed, logout
          await authStore.logout();
          return Promise.reject(error);
        }
      } catch (refreshError) {
        // If refresh fails, logout the user
        await authStore.logout();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
