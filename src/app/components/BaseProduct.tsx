"use client";
import Image from "next/image";
import { Tag } from "lucide-react";
import { Product } from "../utils/types/types.";
import { useBcvRate } from "../BcvRateProvider.client";

export function BaseProduct(productProps: Product) {
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
      className="flex flex-col min-w-36 h-70 md:h-110 w-auto group grid-rows-[1fr_auto]
      bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl hover:border hover:border-blue-500 transition-transform duration-300 transform overflow-hidden animate-slide-in-top"
    >
      {/* Image Container */}
      <div className="grow relative flex w-full justify-center items-center overflow-hidden">
        <Image
          src={productProps.image_url}
          alt={productProps.name}
          width={140}
          height={140}
          className="w-full border-blue-300 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Badge*/}
        <span
          className={`absolute top-3 left-3 inline-flex justify-center items-center gap-1 px-2 py-1 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium ${badgeColor} backdrop-blur-sm text-gray-100 dark:text-gray-200 shadow-sm`}
        >
          <Tag size={12} />
          {categoryName}
        </span>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start px-4 py-2">
        {/* Product Name & Color*/}
        <h3
          className="text-xs xs:text-sm font-semibold text-gray-900 dark:text-gray-100 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200
        md:text-lg"
        >
          {productProps.name}
          {(productProps.category === "Calzado" ||
            productProps.category === "Prenda") && (
            <span className="ml-1 text-xs md:text-md lg:text-lg text-gray-700 dark:text-gray-300">
              #{productProps.size}
            </span>
          )}
        </h3>
        {/* Price */}
        <div className="flex flex-col mb-4">
          <span className="text-xs xs:text-sm md:text-xl font-bold text-green-600 dark:text-green-400">
            {formatPrice(productProps.price, "USD")}
          </span>
          <span className="text-ss xs:text-xs md:text-md font-medium text-gray-600 dark:text-gray-400 dark:group-hover:text-white group-hover:text-black transition-colors duration-200">
            {formatPrice(priceVES, "VES")}
          </span>
        </div>
      </div>
    </div>
  );
}
