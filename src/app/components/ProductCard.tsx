'use client'
import Image from "next/image";
import { Tag, ShoppingCartIcon } from "lucide-react";
import { Shoe } from "../types/types.";
import { useBcvRate } from "../BcvRateProvider.client";


export function ProductCard(productProps: Shoe) {
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
  const priceVES = bcvRate ? productProps.price * bcvRate: 0;

  // Map de colores según categoría
  const categoryColors: Record<string, string> = {
    Calzado: "bg-red-500/90 dark:bg-red-800/50",
    Prenda: "bg-pink-500/90 dark:bg-pink-800/50",
    Fármaco: "bg-purple-500/90 dark:bg-purple-800/50",
  };

  const categoryName = productProps.categories?.name ?? "Otro";
  const badgeColor =
    categoryColors[categoryName] ||
    "bg-gray-300/90 dark:bg-gray-700/50"; // fallback

  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl hover:border hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      {/* Image Container */}
      <div className="flex justify-center items-center relative aspect-square overflow-hidden">
        <Image
          src={productProps.image_url}
          alt={productProps.name}
          width={260}
          height={240}
          className="w-fit h-fit object-contain group-hover:scale-105 transition-transform duration-300"
        />

        {/* Category Badge (dinámico) */}
        <div className="absolute top-3 left-3">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${badgeColor} backdrop-blur-sm text-gray-100 dark:text-gray-200 shadow-sm`}
          >
            <Tag size={12} />
            {categoryName}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Product Name */}
        <h3 className="text-lg text-left font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {productProps.name}
        </h3>

        {/* Price */}
        <div className="flex flex-col items-start mb-4">
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {formatPrice(productProps.price, "USD")}
          </span>
          <span className="text-lg text-gray-600 dark:text-gray-400">
            {formatPrice(priceVES, "VES")}
          </span>
        </div>

        {/* Buy Button */}
        <button
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
        >
          <ShoppingCartIcon size={20} />
          Comprar
        </button>
      </div>
    </div>
  );
}
