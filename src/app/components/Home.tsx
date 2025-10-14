import { getShoes } from "../services/supabase/FetchProducts";
import { BaseProduct } from "./BaseProduct";
import { products } from "../data/products";
import Link from "next/link";
export const revalidate = 120; // segundos

export default async function Home() {
  // const shoes = await getShoes();
  // if (!shoes.length) return <h1>Not Products Found</h1>;

  return (
    <div
      className="w-full flex flex-col min-h-screen px-2 pb-4 pt-22
      md:px-16"
    >
      <section className="relative grow w-full flex flex-col justify-evenly items-center gap-y-10">
        {/* Decorative elements */}
        <div className="absolute top-1/5 left-1/12 w-24 h-24 bg-gradient-to-r from-blue-400/50 to-purple-500/50 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>

        <div className="flex flex-col justify-center items-center gap-y-4">
          <h2 className="text-center text-3xl sm:text-5xl -tracking-wide font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 dark:from-indigo-300  dark:to-pink-300 bg-clip-text text-transparent animate-fade-in">
            ¡Bienvenido A Nuestra Tienda!
          </h2>
          <h4 className="max-w-150 text-center text-xl sm:text-2xl text-blue-900 dark:text-blue-100">
            Catalogo variado de productos que incluyen{" "}
            <span className="text-pink-500">prendas</span>,{" "}
            <span className="text-purple-500">fármacos</span>,{" "}
            <span className="text-red-500">calzado</span>, etc...
          </h4>
        </div>

        <a
          data-interactive="true"
          title="Explorar Catalogo de Productos"
          className="flex justify-center items-center bg-indigo-800 tracking-widest font-semibold text-sm md:text-lg px-3 py-2 md:px-4 md:py-3 text-gray-200 rounded-xl transition-all duration-300 hover:scale-105 hover:bg-indigo-600 hover:shadow-3xl hover:shadow-indigo-600 animate-pop"
          href="/products"
        >
          ¡Explorar Catálogo!
        </a>

        <div className="w-fit h-fit flex flex-wrap justify-center items-center gap-4">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.product_id}
              href={`./products/${product.product_id}`}
            >
              <BaseProduct {...product} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
