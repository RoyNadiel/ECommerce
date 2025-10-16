"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, CloudSunRain } from "lucide-react";
import { ThemeToggle } from "../utils/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const desktopLiItem =
    "text-gray-800 dark:text-gray-300 hover:text-blue-300 transition ease-in-out duration-200 transform hover:scale-105";
  const mobileLiItem =
    "text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-all duration-300";

  return (
    <header
      className="fixed top-0 h-fit w-full bg-white flex gap-y-1 items-center justify-around px-4 py-4 z-20
      dark:bg-gray-900"
    >
      {/* Logo y h2 */}
      <Link href="/" className="inline-flex justify-center items-center gap-2">
        <CloudSunRain
          className="text-yellow-500 dark:text-blue-400"
          size={24}
        />
        <h2 className="font-jura tracking-wider text-lg md:text-2xl font-extrabold text-black dark:text-white">
          {" "}
          Catalogo Online
        </h2>
      </Link>
      {/* Menu de Navegación */}
      <nav className="flex md:items-center md:gap-x-10">
        <ul className="hidden md:flex md:gap-x-4">
          <li className={desktopLiItem}>
            <Link href="/">Inicio</Link>
          </li>
          <li className={desktopLiItem}>
            <Link href="/products">Productos</Link>
          </li>
          <li className="text-gray-800 dark:text-gray-400">
            <Link href="#">Contacto</Link>
          </li>
        </ul>
      </nav>
      {/* Mobile Menu */}
      <div className="md:hidden relative z-100">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 hover:text-blue-600 p-2 rounded-md transition-all duration-300"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu color="#ccc" className="w-6 h-6" />
          )}
        </button>
      </div>

      <div
        className={`absolute top-full right-0 w-full md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white/95 dark:bg-gray-900 backdrop-blur-md`}
      >
        <div className="px-6 py-2 space-y-1">
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className={mobileLiItem}
          >
            Inicio
          </Link>
          <Link
            href="/products"
            onClick={() => setIsMenuOpen(false)}
            className={mobileLiItem}
          >
            Productos
          </Link>
          <Link
            href="#"
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 
                dark:text-gray-300 block px-3 py-2 text-base font-medium"
          >
            Contacto
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
