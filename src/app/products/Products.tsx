"use client";
import Link from "next/link";
import { useDeferredValue, useState, useMemo } from "react";
import { BaseProduct } from "../components/BaseProduct";
import { Product } from "../utils/types/types.";
import FilterMenu from "../components/FilterMenu";

type Props = {
  products: Product[];
};

export default function Products({ products }: Props) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("TodasLasCategorias");
  const [stock, setStock] = useState("TodosLosProductos");
  const [priceOrder, setPriceOrder] = useState("SinOrdenar");

  // Creamos una versión diferida de query
  const deferredQuery = useDeferredValue(query);

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        if (
          deferredQuery &&
          !product.name.toLowerCase().includes(deferredQuery.toLowerCase())
        )
          return false;
        if (category !== "TodasLasCategorias" && product.category !== category)
          return false;
        // Stock filtrado si quieres activarlo
        if (stock === "Stock" && product.stock === 0) return false;
        if (stock === "Sin Stock" && product.stock > 0) return false;
        return true;
      })
      .sort((a, b) => {
        if (priceOrder === "MenorPrecio") return a.price - b.price;
        if (priceOrder === "MayorPrecio") return b.price - a.price;
        return 0;
      });
  }, [products, deferredQuery, category, priceOrder]);

  const clearFilters = () => {
    if (
      query ||
      category !== "TodasLasCategorias" ||
      priceOrder !== "SinOrdenar"
    ) {
      setQuery("");
      setCategory("TodasLasCategorias");
      setStock("TodosLosProductos");
      setPriceOrder("SinOrdenar");
    }
  };

  return (
    <div className="w-full min-h-screen px-2 pb-2 sm:px-12 pt-22">
      {/* FILTER MENU */}
      <FilterMenu
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        stock={stock}
        setStock={setStock}
        priceOrder={priceOrder}
        setPriceOrder={setPriceOrder}
        clearFilters={clearFilters}
        filteredProducts={filteredProducts.length}
      />
      {/* Productos */}
      <main
        className="
        w-full 
        grid
        grid-cols-2
        xs:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5
        2xl:grid-cols-6
        gap-2
      "
      >
        {filteredProducts.map((product) => (
          <Link
            key={product.product_id}
            href={`./products/${product.product_id}`}
          >
            <BaseProduct {...product} />
          </Link>
        ))}
      </main>
    </div>
  );
}
