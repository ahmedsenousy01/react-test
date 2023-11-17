import { create } from "zustand";

type Theme = 'light' | 'dark' | 'system';

export interface AppState {
    theme: Theme;
    isLoading: boolean;
    setTheme: (theme: 'light' | 'dark' | 'system') => void;
    setIsLoading: (isLoading: boolean) => void;
}

export const createAppSlice = create<AppState>()((set) => ({
    theme: 'system',
    isLoading: false,
    setTheme: (theme: Theme) => set({ theme }),
    setIsLoading: (isLoading: boolean) => set({ isLoading }),
}));
