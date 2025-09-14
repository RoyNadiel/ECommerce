import { getShoes } from '../services/supabase/FetchProducts';
import { ProductCard } from './ProductCard';
export const revalidate = 120 // segundos

export default async function Home() {
  const shoes = await getShoes();
  if (!shoes.length) return <h1>Not Products Found</h1>;

  return (
    <div className="w-full flex flex-col min-h-screen pt-26 py-4 px-8
        md:px-16">      
      <section className='grow text-center w-full flex flex-col justify-evenly items-center gap-y-10'>
        <div className='flex flex-col justify-center items-center gap-y-4'>
          <h2 className='text-3xl sm:text-6xl font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-indigo-300  dark:to-pink-300 bg-clip-text text-transparent'>
            ¡Bienvenido A Nuestra Tienda!
          </h2>
          <h4 className='max-w-150 text-center text-xl sm:text-3xl text-blue-900 dark:text-blue-100'>
            Catalogo variado de productos que incluyen <span className='text-hard-pink'>prendas</span>, <span className='text-hard-purple'>fármacos</span>, <span className='text-hard-red'>calzado</span>, etc...
          </h4>
        </div>
        <a data-interactive="true" title="Enlace para ver productos"
          className='flex justify-center items-center bg-indigo-800 tracking-widest p-2 sm:h-14 sm:w-54 text-md sm:text-xl text-gray-200 rounded-xl transition-all duration-300 hireMeButtonAnimation'
          href="/products">
          ¡Ver Productos!
        </a>

        <div className='w-fit h-fit flex flex-wrap justify-center items-center gap-4'>
          {shoes.slice(0,3).map((shoe) => (
            <ProductCard
              key={shoe.shoes_id}
              {...shoe}
            />
          ))}
        </div>
      </section >
    </div >
  )
}