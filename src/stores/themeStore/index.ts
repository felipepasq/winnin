import { create } from "zustand";

type ThemeType = "light" | "dark";

interface ThemeState {
  theme: ThemeType;
  selectTheme: (theme: ThemeType) => void;
}

export const useThemeStore = create<ThemeState>((set) => ({
  theme: "light",
  selectTheme: (theme) => set(() => ({ theme })),
}));
