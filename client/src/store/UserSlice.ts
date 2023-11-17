import { create } from "zustand";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
} | null;

export interface UserState {
  user: User;
  updateCurrentUser: (user: User) => void;
}

export const createUserSlice = create<UserState>()((set) => ({
  user: null,
  updateCurrentUser: (user) => set(() => ({ user })),
}));
