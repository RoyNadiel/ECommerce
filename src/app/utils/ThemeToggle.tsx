"use client";
import { useEffect, useState } from "react";
import { Sun, Moon, Laptop } from "lucide-react";
import { useClickOutside } from "../hooks/useClickOutside";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as Theme | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    const apply = (t: Theme) => {
      const root = document.documentElement.classList;
      if (t === "light") root.remove("dark");
      else if (t === "dark") root.add("dark");
      else {
        const systemDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        root.toggle("dark", systemDark);
      }
    };
    apply(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleThemes = () => setIsOpen((v) => !v);
  const ref = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={handleToggleThemes}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 dark:bg-gray-900 hover:shadow-xl dark:hover:bg-gray-800 transition-all"
      >
        {theme === "light" && <Sun className="text-yellow-500" />}
        {theme === "dark" && <Moon className="text-blue-400" />}
        {theme === "system" && (
          <Laptop className="text-gray-500 dark:text-gray-300" />
        )}
      </button>

      {isOpen && (
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-36 rounded-xl bg-white dark:bg-gray-900 shadow-lg z-100">
          <ul className="flex flex-col">
            <li>
              <button
                onClick={() => {
                  setTheme("light");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl dark:text-white"
              >
                <Sun className="w-4 h-4 text-yellow-500" /> Light
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTheme("dark");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white"
              >
                <Moon className="w-4 h-4 text-blue-400" /> Dark
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setTheme("system");
                  setIsOpen(false);
                }}
                className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-xl dark:text-white"
              >
                <Laptop className="w-4 h-4 text-gray-500 dark:text-gray-300" />{" "}
                System
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
