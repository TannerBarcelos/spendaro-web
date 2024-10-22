import { create } from "zustand";
import { persist, PersistOptions } from 'zustand/middleware'

interface AuthStore {
  isSignedIn: boolean;
  signin: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist<AuthStore>(
    (set) => ({
      isSignedIn: false,
      signin: () => set({ isSignedIn: true }),
      logout: () => set({ isSignedIn: false }),
    }),
    {
      name: 'auth-storage'
    } as PersistOptions<AuthStore>
  )
);
