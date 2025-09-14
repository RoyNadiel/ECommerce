'use client'
import Link from 'next/link';
import Image from 'next/image';

export default function Header(){
  return (
    <header className='h-fit w-full bg-white flex flex-col gap-y-1 md:flex-row items-center justify-around px-4 py-4 fixed z-10
      dark:bg-gray-900'>
                                          {/* Logo y h2 */}
        <Link href="/" className='inline-flex justify-center items-center gap-2'>
          <Image src="https://flowbite.com/docs/images/logo.svg" width={30} height={30} alt="Flowbite Logo"/>
          <h2 className='font-jura tracking-wider text-2xl font-extrabold text-black dark:text-white'>Norbelys Tienda</h2>
        </Link>
                                            {/* Menu de Navegación */}
        <nav className="flex md:items-center md:gap-x-10">
          <ul className='flex gap-4'>
              <li className='liItem'><Link href="/">Inicio</Link></li>
              <li className='liItem'><Link href="/products">Productos</Link></li>
              <li className='liItem'><Link href="#">Contacto</Link></li>
          </ul>
        </nav>        
    </header>
  )
}