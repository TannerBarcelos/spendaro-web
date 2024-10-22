import { create } from "zustand";
import { persist, PersistOptions } from "zustand/middleware";

interface UserStore {
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setProfileImage: (profileImage: string) => void;
  clear: () => void;
}

export const useUserStore = create<UserStore>()(
  persist<UserStore>(
    (set) => ({
      firstName: "",
      lastName: "",
      email: "",
      profileImage: "",
      setFirstName: (firstName) => set({ firstName }),
      setLastName: (lastName) => set({ lastName }),
      setEmail: (email) => set({ email }),
      setProfileImage: (profileImage) => set({ profileImage }),
      clear: () => set({ firstName: "", lastName: "", email: "" }),
    }),
    {
      name: "user-storage",
    } as PersistOptions<UserStore>
  )
);
