import {
  Search,
  Tag,
  ArrowUpNarrowWideIcon,
  Package,
  Filter,
  TrendingUp,
  TrendingDown,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
// import { useClickAway } from "react-use";
import { useState, useEffect } from "react";

type Props = {
  query: string;
  setQuery: (query: string) => void;
  category: string;
  setCategory: (category: string) => void;
  stock: string;
  setStock: (stock: string) => void;
  priceOrder: string;
  setPriceOrder: (priceOrder: string) => void;
  filteredProducts: number;
  clearFilters: () => void;
};

export default function FilterMwnu(props: Props) {
  const {
    query,
    setQuery,
    category,
    setCategory,
    stock,
    setStock,
    priceOrder,
    setPriceOrder,
    filteredProducts,
    clearFilters,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  // const ref = useRef(null);
  // useClickAway(ref, () => {
  //   setIsOpen(false);
  // });

  // Mantiene isOpen en true desde md en adelante
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(true);
    };

    handleResize(); // Ejecutar al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const selectBaseClass =
    "w-full text-xs sm:text-sm md:text-md dark:bg-gray-900 rounded-md py-2 pl-10 pr-4";
  const optionBaseClass = "text-xs sm:text-sm md:text-md dark:bg-gray-900";

  return (
    <section>
      {/* Menu */}
      <div
        className="sticky top-20 w-full grid grid-cols-1 gap-x-10 gap-y-3 p-3 md:p-5 z-10 
        bg-white text-black dark:text-white dark:bg-gray-900 rounded-md shadow-md mb-14 border border-gray-300 dark:border-gray-800
        sm:grid-cols-2 lg:grid-cols-4"
      >
        {/* Filtro de Busqueda Label  */}
        <div className="h-fit flex flex-row sm:flex-row items-center gap-2 justify-between col-span-full">
          <div className="w-full flex items-center gap-2">
            <h2
              className="w-full inline-flex items-center gap-x-1 text-sm sm:text-md md:text-2xl font-semibold text-gray-900 dark:text-white"
              onClick={() => {
                if (window.innerWidth < 768) setIsOpen((prev) => !prev);
              }}
            >
              <Filter className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              Filtros de Búsqueda
            </h2>
          </div>

          {(category !== "TodasLasCategorias" ||
            stock !== "TodosLosProductos" ||
            priceOrder !== "SinOrdenar") && (
            <button
              onClick={clearFilters}
              className="min-w-22 text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 hover:cursor-pointer dark:hover:text-blue-400 transition-colors duration-200 font-medium
              md:text-sm lg:text-md"
            >
              Limpiar filtros
            </button>
          )}

          <div onClick={() => setIsOpen((prev) => !prev)} className="md:hidden">
            {isOpen ? (
              <ChevronDown className="text-gray-400 dark:text-gray-300" />
            ) : (
              <ChevronUp className="text-gray-400 dark:text-gray-300" />
            )}
          </div>
        </div>

        {isOpen && (
          <>
            <div className="w-full lg:col-start-1">
              <label
                htmlFor="Buscar producto"
                className="block text-xs sm:text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Buscar producto
              </label>
              <div className="relative">
                <Search className="absolute top-1/2 -translate-y-1/2 left-2 text-blue-500" />
                <input
                  type="text"
                  placeholder="Buscar producto..."
                  autoFocus
                  className={`${selectBaseClass} border border-blue-500`}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
            </div>

            {/* Seleccion de Categorias */}
            <div className="w-full sm:col-start-2 lg:col-start-2">
              <label
                htmlFor="Seleccionar Categoria"
                className="block text-xs sm:text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Categoría
              </label>
              <div className="relative">
                <Tag className="absolute top-1/2 -translate-y-1/2 left-2 text-purple-300" />
                <select
                  autoFocus
                  name="Categorias"
                  className={`${selectBaseClass} border border-purple-300`}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option
                    className={`${optionBaseClass}`}
                    value="TodasLasCategorias"
                  >
                    Todas las Categorias
                  </option>
                  <option className={`${optionBaseClass}`} value="Prenda">
                    Prenda
                  </option>
                  <option className={`${optionBaseClass}`} value="Calzado">
                    Calzado
                  </option>
                  <option className={`${optionBaseClass}`} value="Farmaco">
                    Farmaco
                  </option>
                </select>
              </div>
            </div>

            {/* Stock */}
            <div className="w-full sm:col-start-1 lg:col-start-3">
              <label
                htmlFor="Filtra por Stock"
                className="block text-xs sm:text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Stock
              </label>
              <div className="relative">
                <Package className="absolute top-1/2 -translate-y-1/2 left-2 text-red-300" />
                <select
                  name="Stock"
                  className={`${selectBaseClass} border border-red-300`}
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                >
                  <option
                    className={`${optionBaseClass}`}
                    value="TodosLosProductos"
                  >
                    Todos Los Productos
                  </option>
                  <option className={`${optionBaseClass}`} value="Stock">
                    Stock
                  </option>
                  <option className={`${optionBaseClass}`} value="Sin Stock">
                    Sin Stock
                  </option>
                </select>
              </div>
            </div>

            {/* Menor o Mayor Precio */}
            <div className="w-full sm:col-start-2  lg:col-start-4">
              <label
                htmlFor="Filtrar por Precio"
                className="block text-xs sm:text-sm md:text-md font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Ordenar precio
              </label>
              <div className="relative">
                <ArrowUpNarrowWideIcon className="absolute top-1/2 -translate-y-1/2 left-2 text-green-300" />
                <select
                  name="Menor o Mayor"
                  className={`${selectBaseClass} border border-green-300`}
                  value={priceOrder}
                  onChange={(e) => setPriceOrder(e.target.value)}
                >
                  <option className={`${optionBaseClass}`} value="SinOrdenar">
                    Sin Ordenar
                  </option>
                  <option className={`${optionBaseClass}`} value="MenorPrecio">
                    Menor Precio
                  </option>
                  <option className={`${optionBaseClass}`} value="MayorPrecio">
                    Mayor Precio
                  </option>
                </select>
              </div>
            </div>

            {(category !== "TodasLasCategorias" ||
              stock !== "TodosLosProductos" ||
              priceOrder !== "SinOrdenar") && (
              <div className="w-full h-full col-span-full pt-4 border-t mt-4 border-gray-400 dark:border-gray-500">
                <div className="inline-flex flex-wrap gap-x-4">
                  {category !== "TodasLasCategorias" && (
                    <span className="inline-flex w-fit text-xs sm:text-md items-center gap-x-1 px-4 py-2 rounded-full font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                      <Filter size={12} />
                      {category}
                    </span>
                  )}
                  {stock !== "TodosLosProductos" && (
                    <span className="inline-flex w-fit text-xs sm:text-md items-center gap-x-1 px-4 py-2 rounded-full font-medium bg-purple-100 dark:bg-purple-900/30 text-green-800 dark:text-purple-300">
                      <Package size={12} />
                      {stock}
                    </span>
                  )}
                  {priceOrder !== "SinOrdenar" && (
                    <span className="inline-flex w-fit text-xs sm:text-md items-center gap-x-1 px-4 py-2 rounded-full font-medium bg-orange-100 dark:bg-orange-900/30 text-green-800 dark:text-orange-300">
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
          </>
        )}
        <span className="absolute text-sm md:text-md top-full right-2 mt-2 dark:text-gray-300 text-gray-500">
          {filteredProducts} Productos encontrados
        </span>
      </div>
    </section>
  );
}
