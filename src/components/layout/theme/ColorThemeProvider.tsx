"use client";

import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

const ColorThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" {...props}>
      {children}
    </ThemeProvider>
  );
};

export default ColorThemeProvider;
