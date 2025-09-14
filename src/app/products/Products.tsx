'use client'
import { useState, useMemo } from "react";
import { ProductCard } from '../components/ProductCard';
import { Shoe } from '../types/types.';
import { Search, Tag, ArrowUpNarrowWideIcon, Package, Filter, TrendingUp, TrendingDown } from 'lucide-react';

type Props = {
  shoes: Shoe[];
};

export default function Products({ shoes }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("TodasLasCategorias");
  const [stock, setStock] = useState("TodosLosProductos");
  const [priceOrder, setPriceOrder] = useState("SinOrdenar");

  const filteredShoes = useMemo(() => {
    return shoes.filter(s => {
      if (query && !s.name.toLowerCase().includes(query.toLowerCase())) return false;
      if (category !== "TodasLasCategorias" && s.categories?.name !== category) return false;
      // Stock filtrado si quieres activarlo
      // if (stock === "Stock" && s.size === 0) return false;
      // if (stock === "Sin Stock" && s.size > 0) return false;
      return true;
    }).sort((a, b) => {
      if (priceOrder === "MenorPrecio") return a.price - b.price;
      if (priceOrder === "MayorPrecio") return b.price - a.price;
      return 0;
    });
  }, [shoes, query, category, stock, priceOrder]);

  const clearFilters = () => {
    if(query || category !== "TodasLasCategorias" || priceOrder !== "SinOrdenar"){
      setQuery('');
      setCategory('TodasLasCategorias');
      setStock('TodosLosProductos');
      setPriceOrder('SinOrdenar');
    }
  }

  return (
    <div className="w-full min-h-screen pt-26 px-8 md:px-12">
      {/* Menu */}
      <div className="relative w-full grid grid-cols-1 gap-x-10 gap-y-3 py-8 px-8 bg-white text-black dark:text-white dark:bg-gray-900 rounded-md shadow-md mb-14 border border-gray-300 dark:border-gray-800 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Filtro de Busqueda Label  */}
        <div className="h-fit flex flex-col mb-2 sm:flex-row items-start sm:items-center gap-2 justify-between col-span-full">
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Filtros de Búsqueda
            </h2>
          </div>
          {(category !== 'TodasLasCategorias' || stock !== 'TodosLosProductos' || priceOrder !== 'SinOrdenar') && (
            <button
              onClick={clearFilters}
              className="text-lg text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Input Productos */}
        <div className="w-full lg:col-start-1">
          <label htmlFor="Buscar producto" className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Buscar producto</label>
          <div className="relative">
            <Search className="absolute top-1/2 -translate-y-1/2 left-2 text-blue-500" />
            <input
              type="text"
              placeholder="Buscar producto..."
              autoFocus
              className="w-full border border-blue-500 rounded-md py-2 pl-10 pr-4"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Seleccion de Categorias */}
        <div className="w-full sm:col-start-2 lg:col-start-2">
          <label htmlFor="Seleccionar Categoria" className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Categoría</label>
          <div className="relative">
            <Tag className="absolute top-1/2 -translate-y-1/2 left-2 text-purple-300"/>
            <select
              name="Categorias"
              className="w-full border  border-purple-300 dark:bg-gray-900 rounded-md py-2 pl-10 pr-4"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option className="dark:bg-gray-900" value="TodasLasCategorias">Todas las Categorias</option>
              <option className="dark:bg-gray-900" value="Prenda">Prenda</option>
              <option className="dark:bg-gray-900" value="Calzado">Calzado</option>
              <option className="dark:bg-gray-900" value="Farmaco">Farmaco</option>
            </select>
          </div>
        </div>

        {/* Stock */}
        <div className="w-full sm:col-start-1 lg:col-start-3">
          <label htmlFor="Filtra por Stock" className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Stock</label>
          <div className="relative">
            <Package className="absolute top-1/2 -translate-y-1/2 left-2 text-red-300" />
            <select
              name="Stock"
              className="w-full border border-red-300 dark:bg-gray-900 rounded-md py-2 pl-10 pr-4"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            >
              <option className="dark:bg-gray-900" value="TodosLosProductos">Todos Los Productos</option>
              <option className="dark:bg-gray-900" value="Stock">Stock</option>
              <option className="dark:bg-gray-900" value="Sin Stock">Sin Stock</option>
            </select>
          </div>
        </div>

        {/* Menor o Mayor Precio */}
        <div className="w-full sm:col-start-2  lg:col-start-4">
          <label htmlFor="Filtrar por Precio" className="block text-md font-medium text-gray-700 dark:text-gray-300 mb-2">Ordenar precio</label>
          <div className="relative">
            <ArrowUpNarrowWideIcon className="absolute top-1/2 -translate-y-1/2 left-2 text-green-300" />
            <select
              name="Menor o Mayor"
              className="w-full border border-green-300 dark:bg-gray-900 rounded-md py-2 pl-10 pr-4"
              value={priceOrder}
              onChange={(e) => setPriceOrder(e.target.value)}
            >
              <option value="SinOrdenar">Sin Ordenar</option>
              <option value="MenorPrecio">Menor Precio</option>
              <option value="MayorPrecio">Mayor Precio</option>
            </select>
          </div>
        </div>

        <label className="absolute top-full right-2 mt-2 dark:text-gray-300 text-gray-500">
          {filteredShoes.length} Productos encontrados
        </label>
        {(category !== "TodasLasCategorias" || stock !== "TodosLosProductos" || priceOrder !== "SinOrdenar") && (
          <div className="w-full h-full col-span-full pt-4 border-t mt-4 border-gray-400 dark:border-gray-500">
            <div className="inline-flex flex-wrap gap-x-4">
              {category !== "TodasLasCategorias" && (
                <span className="inline-flex w-fit text-md items-center gap-x-1 px-4 py-2 rounded-full font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                  <Filter size={12} />
                  {category}
                </span>
              )}
              {stock !== "TodosLosProductos" && (
                <span className="inline-flex w-fit text-md items-center gap-x-1 px-4 py-2 rounded-full font-medium bg-purple-100 dark:bg-purple-900/30 text-green-800 dark:text-purple-300">
                  <Package size={12} />
                  {stock}
                </span>
              )}
              {priceOrder !== "SinOrdenar" && (
                <span className="inline-flex w-fit text-md items-center gap-x-1 px-4 py-2 rounded-full font-medium bg-orange-100 dark:bg-orange-900/30 text-green-800 dark:text-orange-300">
                  {priceOrder === "MenorPrecio" ? (
                    <TrendingDown size={12} />
                  ) : (
                    <TrendingUp size={12} />
                  )}
                  {priceOrder}
                </span>
              )}
            </div>
          </div>
        )}

      </div>

      {/* Productos */}
      <div className="w-full flex flex-wrap justify-center items-center gap-4">
        {filteredShoes.map((shoes, idx) => (
          <ProductCard
            key={shoes.shoes_id ?? idx}
            {...shoes} // No pasamos bcvRate
          />
        ))}
      </div>
    </div>
  );
}
