import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface AuthStore {
  accessToken?: string;
  refreshToken?: string;
  setAccessTokens: (accessToken: string, refreshToken: string) => void;
  clear: () => void;
}

export const authStore = create<AuthStore>()(
  persist<AuthStore>(
    (set) => ({
      accessToken: undefined,
      refreshToken: undefined,
      setAccessTokens: (accessToken:string, refreshToken: string) => set({ accessToken, refreshToken }),
      clear: () => {
        set({ accessToken: undefined, refreshToken: undefined });
        localStorage.removeItem("auth-storage");
      }
    }),
    {
      name: "auth-storage",
    } as PersistOptions<AuthStore>
  )
);

export const isAuthenticated = () => {
  const access_token = authStore.getState().accessToken;
  return !!access_token;
};
