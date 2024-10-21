import { create } from "zustand";

interface AuthStore {
  isSignedIn: boolean;
  setIsSignedIn: (isSignedIn: boolean) => void;
}

export const useAuthStore = create<AuthStore>()((set) => ({
    isSignedIn: false,
    setIsSignedIn: (isSignedIn) => set({ isSignedIn }),
}));
