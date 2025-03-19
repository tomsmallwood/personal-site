'use client'

import { applyMode, Mode } from "@cloudscape-design/global-styles";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  mode: Mode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FunctionComponent<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<Mode>(() => {
    if (typeof window === "undefined") {
      return Mode.Light
    }
    return localStorage.getItem("theme") as Mode || Mode.Light;
  });

  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    applyMode(mode);
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === Mode.Light ? Mode.Dark : Mode.Light));
  };

  return (
    <>
      {mounted ? (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>{children}</ThemeContext.Provider>
      ) : null}
    </>
  )
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
