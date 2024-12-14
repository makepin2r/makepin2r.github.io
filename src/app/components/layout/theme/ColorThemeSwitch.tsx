"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, DesktopIcon } from "@radix-ui/react-icons";

const ColorThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <button>
      {theme === "light" ? (
        <SunIcon width={18} height={18} onClick={() => setTheme("dark")} />
      ) : (
        <MoonIcon width={18} height={18} onClick={() => setTheme("light")} />
      )}
    </button>
  );
};

export default ColorThemeSwitch;
