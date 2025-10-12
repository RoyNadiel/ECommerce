"use client";
import Image from "next/image";
import { Tag, ShoppingCartIcon } from "lucide-react";
import { Product } from "../utils/types/types.";
import { useBcvRate } from "../BcvRateProvider.client";
import { useState } from "react";

export function BaseProduct(productProps: Product) {
  const [onSelectProduct, setOnSelectProduct] = useState<Product | null>(null);
  const bcvRate = useBcvRate();
  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("es-VE", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };

  // Precio convertido
  const priceVES = bcvRate ? productProps.price * bcvRate : 0;

  // Map de colores según categoría
  const categoryColors: Record<string, string> = {
    Calzado: "bg-red-500/90 dark:bg-red-800/70",
    Prenda: "bg-pink-500/90 dark:bg-pink-800/70",
    Farmaco: "bg-purple-500/90 dark:bg-purple-800/70",
  };

  const categoryName = productProps.category ?? "Otro";
  const badgeColor =
    categoryColors[categoryName] || "bg-gray-300/90 dark:bg-gray-700/50"; // fallback

  return (
    <div
      className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl hover:border hover:border-blue-500 transition-transform duration-300 transform hover:-translate-y-1 overflow-hidden animate-slide-in-top"
      onClick={() => setOnSelectProduct(productProps)}
    >
      {/* Image Container */}
      <div className="relative flex min-w-40 min-h-45 justify-center items-center aspect-square overflow-hidden">
        <Image
          src={productProps.image_url}
          alt={productProps.name}
          width={140}
          height={140}
          className="w-38 border-blue-300 h-fit object-contain group-hover:scale-105 transition-transform duration-300
          md:w-65"
        />

        {/* Category Badge*/}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium ${badgeColor} backdrop-blur-sm text-gray-100 dark:text-gray-200 shadow-sm`}
          >
            <Tag size={12} />
            {categoryName}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col justify-evenly items-start px-4 pb-2">
        {/* PRODUCT STATE */}
        {/* <div className="text-[8px] md:text-xs font-medium text-gray-700 dark:text-gray-300">
            {productProps.state}
        </div> */}
        {/* Product Name & Color*/}
        <div className="w-full inline-flex justify-between items-center gap-2">
          <h3
            className="text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200
          md:text-lg"
          >
            {productProps.name}
            {(productProps.category === "Calzado" ||
              productProps.category === "Prenda") && (
              <span className="ml-2 text-xs md:text-md text-gray-700 dark:text-gray-300">
                #{productProps.size}
              </span>
            )}
          </h3>
          {/* PRODUCT COLOR  */}
          {(productProps.category === "Calzado" ||
            productProps.category === "Prenda") && (
            <span className="relative text-xs md:text-md text-gray-700 dark:text-gray-300">
              {productProps.color}
              {productProps.category === "Prenda" && (
                <span className="absolute top-full left-1/2 -translate-x-1/2 text-xs md:text-md text-gray-700 dark:text-gray-300">
                  {productProps.brand}
                </span>
              )}
            </span>
          )}
        </div>
        {/* PRODUCT STOCK */}
        {/* <div className="text-xs md:text-md font-medium text-gray-700 dark:text-gray-300">
            Cantidad: {productProps.stock}
        </div> */}

        {/* Price */}
        <div className="flex flex-col mb-4">
          <span className="text-sm md:text-xl font-bold text-green-600 dark:text-green-400">
            {formatPrice(productProps.price, "USD")}
          </span>
          <span className="text-xs md:text-md text-gray-600 dark:text-gray-400 dark:group-hover:text-white group-hover:text-black transition-colors duration-200">
            {formatPrice(priceVES, "VES")}
          </span>
        </div>

        {/* Buy Button */}
        {/* <button
          className="w-full flex items-center justify-center gap-2 py-1 px-2 text-xs bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl
          md:py-2 md:px-4 md:text-lg"
        >
          <ShoppingCartIcon className="w-3 h-3"/>
          Comprar
        </button> */}
      </div>

      {/* {onSelectProduct && 
      <ProductDetails 
      product={productProps}
      priceVES={priceVES}
      onDeselectProductAction={() => setOnSelectProduct(null)}
      ></ProductDetails>} */}
    </div>
  );
}
