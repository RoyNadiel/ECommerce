"use client"
import React, { useEffect, useRef, useState } from 'react';

export default function Header(){
    // 1. Estado para controlar la visibilidad del dropdown
  const [isOpen, setIsOpen] = useState(false);

  // 2. Referencia al contenedor del dropdown para manejar clics fuera
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 3. Manejador para alternar la visibilidad
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const handleClickOutside = (event:Event) => {
      if (dropdownRef.current && event.target && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  
    return (
        <header className='h-14 w-full bg-blue-950 flex items-center justify-around p-4 fixed'>
            <a href="/" className='inline-flex justify-center items-center gap-3'><img src="https://flowbite.com/docs/images/logo.svg" alt="Flowbite Logo" /><h2 className='font-bold text-2xl'>Mercadoriteño</h2></a>

            <div className='flex items-center'  ref={dropdownRef}>
                <button onClick={toggleDropdown} 
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        aria-label="Abrir menú de opciones"
                        className='w-fit-content h-10 px-4 py-2 border border-gray-300 rounded-md rounded-r-none p-2 cursor-pointer inline-flex shrink items-center justify-center relative active:scale-105'>
                   <div className='inline-flex gap-2'>
                    <svg fill="#ffff" fillRule="evenodd" className="flex:none;line-height:1" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><title>Anthropic</title><path d="M13.827 3.52h3.603L24 20h-3.603l-6.57-16.48zm-7.258 0h3.767L16.906 20h-3.674l-1.343-3.461H5.017l-1.344 3.46H0L6.57 3.522zm4.132 9.959L8.453 7.687 6.205 13.48H10.7z"></path>
                    </svg>
                    Antolin
                   </div>
                </button>

                <div  className='relative'>
                    <ul className={`absolute top-7 -left-29 z-10 mt-1 bg-blue-950 border border-gray-300 rounded-md shadow-md ${isOpen ? 'block' : 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
                        <li role="menuitem" className='w-32 inline-flex gap-2 justify-center h-10 px-4 py-2 cursor-pointer hover:bg-gray-400/50'>
                            <button className='overflow-hidden'>
                                Pampatar
                            </button>
                        </li>
                        <li role="menuitem" className='w-32 inline-flex gap-2 justify-center h-10 px-4 py-2 cursor-pointer hover:bg-gray-400/50'>
                            <button className='overflow-hidden'>
                                Arismendi
                            </button>
                        </li>
                        <li role="menuitem" className='w-32 inline-flex gap-2 justify-center h-10 px-4 py-2 cursor-pointer hover:bg-gray-400/50'>
                            <button className='overflow-hidden'>
                                Porlamar
                            </button>
                        </li>
                    </ul>
                </div>
                <input type="text" className='w-80 h-10 px-4 py-2 text-left border border-gray-300 rounded-xl p-2 rounded-l-none focus:border-gray-500 outline-gray-800' placeholder='Buscar...' />
            </div>            

            <nav>
                <ul className='flex gap-6'>
                    <li className='hover:text-blue-300 transition ease-in-out duration-200 transform hover:scale-105 font-mono'><a href="#">Tiendas</a></li>
                    <li className='hover:text-blue-300 transition ease-in-out duration-200 transform hover:scale-105'><a href="#">Categorias</a></li>
                    <li className='hover:text-blue-300 transition ease-in-out duration-200 transform hover:scale-105'><a href="#">Contacto</a></li>
                </ul>
            </nav>
        </header>        
    )
}