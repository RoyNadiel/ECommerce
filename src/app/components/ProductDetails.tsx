"use client";
import Image from "next/image";
import { Product } from "../utils/types/types.";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useState } from "react";
import {
  ShoppingCart,
  Check,
  Sparkles,
  ClipboardCopy,
  ArrowLeft,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

type ProductDetails = {
  product: Product;
  priceVES: number;
};
export default function ProductDetails({ product, priceVES }: ProductDetails) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const router = useRouter();
  const goBack = () => router.back();
  const images: string[] = [
    product.image_url,
    "/Sharingan.png",
    "/products/EYE.png",
    "/products/converse-1.png",
    "/products/tommy-1.png",
  ];
  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const formatPrice = (price: number, currency: string) => {
    return new Intl.NumberFormat("es-VE", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price);
  };
  const copyActualURL = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      // alert("URL copiada al portapapeles");
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  return (
    // SCREEN
    <div
      className="w-full min-h-screen grid place-items-start gap-4 px-4 pt-22 bg-transparent
        md:grid-cols-[auto_1fr] md:pb-4 md:px-12"
    >
      {/* Panel de Navegacion de Imagenes */}
      {images.length > 1 && (
        <aside className="flex flex-wrap flex-row md:flex-col gap-3 overflow-x-auto p-2 bg-white dark:bg-transparent mt-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 grid place-items-center rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                index === currentIndex
                  ? "border-blue-600 shadow-lg"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image
                width={50}
                height={50}
                src={image}
                alt={`${product.name} - Miniatura ${index + 1}`}
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </aside>
      )}
      {/* MAIN */}
      <section
        className="relative flex flex-col items-center h-fit w-full bg-white dark:bg-gray-900 rounded-r-md shadow shadow-blue-900 px-6 py-4 
            md:flex-row md:px-8 md:py-5"
      >
        <button
          onClick={goBack}
          className="absolute top-3 right-1.5 sm:top-2 lg:top-3 sm:right-5 inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 text-xs sm:text-sm lg:text-md px-2 py-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
        >
          <ArrowLeft className="w-4 lg:w-5" />
          Volver
        </button>
        {/* Main Image */}
        <div className="w-fit h-full grow relative flex justify-center items-center overflow-hidden group bg-white dark:bg-gray-900">
          <Image
            width={500}
            height={500}
            src={images[currentIndex]}
            alt={`${product.name} - Vista ${currentIndex + 1}`}
            className="w-58 md:w-90 object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
              >
                <ChevronLeft className="w-5 h-5 text-gray-700" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
              >
                <ChevronRight className="w-5 h-5 text-gray-700" />
              </button>
            </>
          )}

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </div>
        </div>

        {/* MAIN ARTICLE */}
        <article className="w-full h-full flex flex-col justify-between gap-y-8 basis-1/2">
          {/* NOMBRE / ESTADO / TALLA */}
          <div className="flex flex-col items-start gap-y-6">
            <section className="flex flex-col">
              <span className="text-gray-600 dark:text-gray-300 text-sm inline-flex justify-start items-center gap-1">
                {product.state === "Usado" ? (
                  <Check color="#00AA00" size={15}></Check>
                ) : (
                  <Sparkles size={15} color="#AAAA00"></Sparkles>
                )}{" "}
                {product.state}
              </span>
              <h2 className="inline-flex gap-3 text-2xl md:text-3xl font-bold uppercase text-gray-900 dark:text-white tracking-widest">
                {product.name}
                {(product.category === "Calzado" ||
                  product.category === "Prenda") && (
                  <span className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-400">
                    Talla #{product.size}
                  </span>
                )}
              </h2>
            </section>
            {/* PRECIOS Y METODOS DE PAGO */}
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-green-500">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                }).format(product.price)}
              </h3>
              <h4 className="text-lg md:text-xl font-medium text-green-600">
                {formatPrice(priceVES, "VES")}
              </h4>
              <div className="text-sm md:text-md text-gray-700 dark:text-white font-semibold self-start mt-2">
                Metodos de Pago:
              </div>
              <div className="text-sm md:text-md text-gray-900 dark:text-gray-300 font-medium self-start">
                Efectivo, Pago Movil, Transferencia Bancaria
              </div>
            </div>
            {/* DESCRIPCION Y CARACTERISTICAS */}
            <div>
              <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white my-2">
                Descripción
              </div>
              <p className="text-sm md:text-lg text-gray-900 dark:text-gray-300">
                Una camisa clásica de corte regular, confeccionada en tela
                ligera y transpirable que garantiza comodidad durante todo el
                día.{" "}
              </p>
              {product.caracteristicas.length > 0 && (
                <>
                  <div className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white my-2">
                    Caracteristicas
                  </div>
                  <ul className="text-gray-900 dark:text-gray-300 list-disc list-inside">
                    {product.caracteristicas.map((car, index) => (
                      <li
                        key={index}
                        className="text-sm md:text-md text-gray-800 dark:text-gray-300 tracking-wide"
                      >
                        {car}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            {/* STOCK / COLOR / MARCA */}
            <div className="mt-2">
              {(product.category === "Calzado" ||
                product.category === "Prenda") && (
                <div className="text-sm md:text-lg flex gap-2 font-medium dark:text-gray-200 text-gray-700">
                  Color:
                  <div className="text-sm md:text-lg dark:text-white text-gray-900">
                    {product.color}
                  </div>
                </div>
              )}
              <div className="text-sm md:text-lg flex gap-2 font-medium dark:text-gray-300 text-gray-700">
                Cantidad:
                <div className="text-sm md:text-lg dark:text-white text-gray-900">
                  {product.stock}
                </div>
              </div>
              {product.category === "Prenda" && (
                <div className="text-sm md:text-lg flex gap-2 font-medium dark:text-gray-300 text-gray-700">
                  Marca:
                  <div className="text-sm md:text-lg dark:text-white text-gray-900">
                    {product.brand}
                  </div>
                </div>
              )}
            </div>
          </div>
          {/* BOTONES */}
          <div className="w-full inline-flex justify-evenly items-center gap-x-4 self-end">
            <button
              className="text-sm md:text-lg py-2 px-3 md:py-2 md:px-4 inline-flex grow justify-center items-center gap-x-2 bg-transparent border-2 border-blue-600 rounded-2xl text-black dark:text-white self-center cursor-pointer hover:bg-blue-600 active:bg-blue-500"
              onClick={copyActualURL}
            >
              <ClipboardCopy size={18}></ClipboardCopy>Copiar URL
            </button>
            <Link
              className="text-sm md:text-lg py-2 px-3 md:py-2 md:px-4 inline-flex grow-2 justify-center items-center gap-x-2 bg-blue-800 rounded-2xl text-white self-center cursor-pointer hover:bg-blue-600"
              href={"https://wa.me/+584123087333"}
              target="_blank"
            >
              <ShoppingCart size={18}></ShoppingCart>Comprar
            </Link>
          </div>
        </article>
      </section>
    </div>
  );
}
