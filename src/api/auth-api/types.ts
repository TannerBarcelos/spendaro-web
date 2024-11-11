const AUTH_BASE_URL = "/auth";

export const AUTH_URLS = {
  login: `${AUTH_BASE_URL}/signin`,
  signup: `${AUTH_BASE_URL}/signup`,
  logout: `${AUTH_BASE_URL}/logout`,
};

export type AuthApiResponse = {
  accessToken: string;
  refreshToken: string;
};