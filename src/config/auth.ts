export const AUTH_CONFIG = {
  // Access token settings
  ACCESS_TOKEN_EXPIRY_MINUTES: 30, // Increased from 1 minute to 30 minutes
  ACCESS_TOKEN_COOKIE_NAME: 'token',
  ACCESS_TOKEN_COOKIE_EXPIRY_DAYS: 7,

  // Refresh token settings
  REFRESH_TOKEN_COOKIE_NAME: 'refresh_token',
  REFRESH_TOKEN_EXPIRY_DAYS: 30,

  // Proactive refresh settings
  PROACTIVE_REFRESH_THRESHOLD_MINUTES: 5, // Refresh token 5 minutes before expiry
} as const;
