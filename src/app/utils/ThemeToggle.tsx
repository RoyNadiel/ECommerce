'use client';
import { useEffect, useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');

  // Cargar preferencia del usuario al montar
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Aplicar el tema cuando cambie
  useEffect(() => {
    const applyTheme = (t: Theme) => {
      if (t === 'light') {
        document.documentElement.classList.remove('dark');
      } else if (t === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (systemPrefersDark) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    applyTheme(theme);
    localStorage.setItem('theme', theme);

    // Si está en "system", reaccionamos a cambios del SO en vivo
    if (theme === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      const handler = (e: MediaQueryListEvent) => {
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      };
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, [theme]);

  return (
    <div className="relative group">
      {/* Botón principal */}
      <button className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-200 dark:bg-gray-900 hover:shadow-xl hover:dark:bg-gray-800 transition-all ease-in duration-300">
        {theme === 'light' && <Sun className="text-yellow-500" />}
        {theme === 'dark' && <Moon className="text-blue-400" />}
        {theme === 'system' && <Laptop className="text-gray-500 dark:text-gray-300" />}
      </button>

      {/* Menú hover */}
      <div className="absolute left-1/2 -translate-x-1/2 top-full w-36 rounded-xl bg-white dark:bg-gray-900 shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
        <ul className="flex flex-col">
          <li>
            <button
              onClick={() => setTheme('light')}
              className="flex items-center gap-2 w-full dark:text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-t-xl"
            >
              <Sun className="w-4 h-4 text-yellow-500" />
              Light
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme('dark')}
              className="flex items-center gap-2 w-full dark:text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Moon className="w-4 h-4 text-blue-400" />
              Dark
            </button>
          </li>
          <li>
            <button
              onClick={() => setTheme('system')}
              className="flex items-center gap-2 w-full dark:text-white px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-b-xl"
            >
              <Laptop className="w-4 h-4 text-gray-500 dark:text-gray-300" />
              System
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
