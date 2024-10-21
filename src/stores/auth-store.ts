import { create } from "zustand";

interface AuthStore {
  isSignedIn: boolean;
  signin: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
    isSignedIn: false,
    signin: () => set({ isSignedIn: true }),
    logout: () => set({ isSignedIn: false }),
}));
