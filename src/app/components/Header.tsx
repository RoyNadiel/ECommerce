"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Store } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 h-fit w-full bg-white flex gap-y-1 items-center justify-around px-4 py-4 z-20
      dark:bg-gray-900"
    >
      {/* Logo y h2 */}
      <Link href="/" className="inline-flex justify-center items-center gap-2">
        <Store color="#0099DD" size={24}></Store>
        <h2 className="font-jura tracking-wider text-lg md:text-2xl font-extrabold text-black dark:text-white">
          {" "}
          Almarys Tienda
        </h2>
      </Link>
      {/* Menu de Navegación */}
      <nav className="flex md:items-center md:gap-x-10">
        <ul className="hidden md:flex md:gap-x-4">
          <li className="liItem">
            <Link href="/">Inicio</Link>
          </li>
          <li className="liItem">
            <Link href="/products">Productos</Link>
          </li>
          <li className="liItem">
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
            <Menu className="w-6 h-6" />
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
            href="#home"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-all duration-300"
          >
            Inicio
          </Link>
          <Link
            href="#features"
            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-all duration-300"
          >
            Productos
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 
                dark:text-gray-300 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-all duration-300"
          >
            Contacto
          </Link>
          <div className="px-3 py-2">
            {/* <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300">
                  Comenzar
                </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
