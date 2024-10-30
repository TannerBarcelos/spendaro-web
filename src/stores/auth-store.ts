import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface AuthStore {
  isSignedIn: boolean;
  accessToken?: string;
  refreshToken?: string;
  setAccessTokens: (accessToken: string, refreshToken: string) => void;
  clear: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist<AuthStore>(
    (set) => ({
      isSignedIn: false,
      accessToken: undefined,
      refreshToken: undefined,
      setAccessTokens: (accessToken:string, refreshToken: string) => set({ isSignedIn: true, accessToken, refreshToken }),
      clear: () => set({ isSignedIn: false, accessToken: undefined, refreshToken: undefined })
    }),
    {
      name: "auth-storage",
    } as PersistOptions<AuthStore>
  )
);
