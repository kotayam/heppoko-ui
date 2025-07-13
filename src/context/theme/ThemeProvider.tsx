import { useState } from "react";
import { Appearance, ThemeContext } from "./ThemeContext";

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const Theme: React.FC<ThemeProviderProps> = ({ children }) => {
  const [appearance, setAppearance] = useState<Appearance>("light");
  return (
    <ThemeContext.Provider value={{ appearance, setAppearance }}>
      {children}
    </ThemeContext.Provider>
  );
};
