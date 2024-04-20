"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [_, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    // when this component is rendered, we can set the mounted state to true
    setMounted(true);
  }, []);

  return (
    <button
      className="text-neutral-500 dark:text-neutral-400"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
