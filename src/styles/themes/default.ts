import { Theme } from "../../types";

export const defaultTheme: Theme = {
  colors: {
    primary: "#6324C6",
    dark_primary: "#4A1D99",
    secondary: "#A7B0BE",
    dark_gray: "#4C5667",
    yellow: "#FFB800",
    white: "#FFFFFF",
    black: "#000000",
  },
  fonts: {
    text: "Mulish, sans-serif",
  },
} as const;
