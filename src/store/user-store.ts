import { create } from "zustand";

interface UserStore {
    firstName: string;
    lastName: string;
    email: string;
    setFirstName: (firstName: string) => void;
    setLastName: (lastName: string) => void;
    setEmail: (email: string) => void;
    clear: () => void;
}

export const useUserStore = create<UserStore>()((set) => ({
    firstName: "",
    lastName: "",
    email: "",
    setFirstName: (firstName) => set({ firstName }),
    setLastName: (lastName) => set({ lastName }),
    setEmail: (email) => set({ email }),
    clear: () => set({ firstName: "", lastName: "", email: "" }),
}));
