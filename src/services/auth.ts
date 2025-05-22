import type { LoginResponse, RefreshTokenResponse, User } from '@/types';
import { AUTH_CONFIG } from '@/config/auth';

export const login = (username: string, password: string) => {
  return useFetch<LoginResponse>('/auth/login', {
    immediate: false,
    method: 'POST',
    body: {
      username,
      password,
      expiresInMins: AUTH_CONFIG.ACCESS_TOKEN_EXPIRY_MINUTES,
    },
  });
};

export const logout = () => {
  return useFetch('/auth/logout', {
    immediate: false,
    method: 'POST',
  });
};

export const refreshToken = () => {
  return useFetch<RefreshTokenResponse>('/auth/refresh', {
    immediate: false,
    method: 'POST',
    body: {
      expiresInMins: AUTH_CONFIG.ACCESS_TOKEN_EXPIRY_MINUTES,
    },
  });
};

export const getUser = () => {
  return useFetch<User>('/auth/me', {
    immediate: false,
  });
};
