import { createContext } from "react";

export type Appearance = "light" | "dark";

type ThemeContextType = {
  appearance: Appearance;
  setAppearance: (v: Appearance) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
