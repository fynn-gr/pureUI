import React from "react";
import useStore from "@/ts/Stores";

export default function WebThemeToggle() {
  const theme = useStore((s) => s.theme);
  const setTheme = useStore((s) => s.setTheme);

  return (
    <button
      className={`topbar-button theme-toggle ${theme === "dark" ? "dark" : ""}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <img src="./icons/topbar/sun.svg" alt="toggle Theme" id="sun" />
      <img src="./icons/topbar/moon.svg" alt="toggle Theme" id="moon" />
    </button>
  );
}
