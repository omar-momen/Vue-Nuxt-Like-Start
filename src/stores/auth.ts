import Cookies from 'js-cookie';
import { login as loginService, logout as logoutService, refreshToken as refreshTokenService, getUser as getUserService } from '@/services';
import { AUTH_CONFIG } from '@/config/auth';
import type { LoginCredentials, User } from '@/types';

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null);
  const token = ref<string | null>(Cookies.get(AUTH_CONFIG.ACCESS_TOKEN_COOKIE_NAME) || null);
  const isAuthenticated = computed(() => !!token.value && !!user.value);
  let refreshTimer: number | null = null;

  const setToken = (newToken: string | null) => {
    token.value = newToken;
    if (newToken) {
      Cookies.set(AUTH_CONFIG.ACCESS_TOKEN_COOKIE_NAME, newToken, {
        expires: AUTH_CONFIG.ACCESS_TOKEN_COOKIE_EXPIRY_DAYS,
      });
      scheduleTokenRefresh();
    } else {
      Cookies.remove(AUTH_CONFIG.ACCESS_TOKEN_COOKIE_NAME);
      clearRefreshTimer();
    }
  };

  const clearRefreshTimer = () => {
    if (refreshTimer) {
      clearTimeout(refreshTimer);
      refreshTimer = null;
    }
  };

  const scheduleTokenRefresh = () => {
    clearRefreshTimer();

    // Calculate time until token expires (minus the threshold)
    const expiryTime = AUTH_CONFIG.ACCESS_TOKEN_EXPIRY_MINUTES * 60 * 1000; // Convert to milliseconds
    const thresholdTime = AUTH_CONFIG.PROACTIVE_REFRESH_THRESHOLD_MINUTES * 60 * 1000;
    const refreshTime = expiryTime - thresholdTime;

    // Schedule the refresh
    refreshTimer = window.setTimeout(async() => {
      await refreshAccessToken();
    }, refreshTime);
  };

  const login = async(credentials: LoginCredentials) => {
    const { data, error, execute, loading } = loginService(credentials.username, credentials.password);
    await execute();

    if (!error.value && data.value) {
      setToken(data.value.accessToken);
      user.value = data.value;
    }

    return { data, error, loading };
  };

  const logout = async() => {
    const { error, execute } = logoutService();
    await execute();

    if (!error.value) {
      clearRefreshTimer();
      setToken(null);
      user.value = null;
    }

    return { error };
  };

  const refreshAccessToken = async() => {
    try {
      const { data, error, execute } = refreshTokenService();
      await execute();

      if (!error.value && data.value) {
        setToken(data.value.accessToken);
        return true;
      }
      return false;
    } catch {
      setToken(null);
      user.value = null;
      return false;
    }
  };

  const checkAuth = async() => {
    if (!token.value) {
      user.value = null;
      return false;
    }

    try {
      // Try to fetch user data to validate the token
      const { data, error, execute } = getUserService();
      await execute();

      if (!error.value && data.value) {
        user.value = data.value;
        return true;
      }

      // If we get here, the token is invalid
      setToken(null);
      user.value = null;
      return false;
    } catch {
      setToken(null);
      user.value = null;
      return false;
    }
  };

  const fetchUser = async() => {
    if (!token.value) return;

    const { data, error, execute } = getUserService();
    await execute();

    if (!error.value && data.value) {
      user.value = data.value;
    } else {
      setToken(null);
      user.value = null;
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout,
    checkAuth,
    refreshAccessToken,
    fetchUser,
  };
});
