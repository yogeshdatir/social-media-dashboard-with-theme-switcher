import React, { createContext, ReactNode, useContext, useState } from "react";

export interface IThemeContext {
  currentThemeName: string;
  setCurrentThemeName: React.Dispatch<React.SetStateAction<string>>;
}

const ThemeToggleContext = createContext<IThemeContext | null>(null);

interface IThemeContextProps {
  children?: ReactNode;
}
export default function ThemeToggleContextProvider(props: IThemeContextProps) {
  const [currentThemeName, setCurrentThemeName] = useState<string>("dark");

  return (
    <ThemeToggleContext.Provider
      value={{
        currentThemeName,
        setCurrentThemeName,
      }}
    >
      {props.children}
    </ThemeToggleContext.Provider>
  );
}

export function useToggleThemeContext() {
  const context = useContext<IThemeContext | null>(ThemeToggleContext);
  if (context === null) {
    throw new Error(
      "useToggleTheme must be used within a ThemeToggleContextProvider"
    );
  }
  return context;
}
