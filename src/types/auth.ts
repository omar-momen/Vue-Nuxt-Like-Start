import type { User } from '@/types';

export interface LoginCredentials {
  username: string
  password: string
}

export interface LoginResponse extends User {
  accessToken: string
  refreshToken: string
}

export interface RefreshTokenResponse {
  accessToken: string
  refreshToken: string
}
