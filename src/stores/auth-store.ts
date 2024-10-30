import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface AuthStore {
  isSignedIn: boolean;
  accessToken?: string;
  refreshToken?: string;
  setAccessTokens: (accessToken: string, refreshToken: string) => void;
  signin: () => void;
  clear: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist<AuthStore>(
    (set) => ({
      isSignedIn: false,
      accessToken: undefined,
      refreshToken: undefined,
      signin: () => set({ isSignedIn: true }),
      setAccessTokens: (accessToken:string, refreshToken: string) => set({ accessToken, refreshToken }),
      clear: () => {
        set({ isSignedIn: false, accessToken: undefined, refreshToken: undefined });
        localStorage.removeItem("auth-storage");
      }
    }),
    {
      name: "auth-storage",
    } as PersistOptions<AuthStore>
  )
);
