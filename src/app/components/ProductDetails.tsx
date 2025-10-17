"use client";
import Image from "next/image";
import { Product } from "../utils/types/types.";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Check, Sparkles, ClipboardCopy, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import WSP from "public/wsp";
import NavigationArrows from "../shared/NavigationArrows";
import next from "next";
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
    "/next.svg",
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
    } catch (err) {
      console.error("Error al copiar:", err);
    }
  };

  const backdropForFeatures = `text-gray-900 bg-white/50 border border-gray-300 rounded-lg p-6 dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700`;

  return (
    // SCREEN
    <div
      className="relative grid grid-rows-[auto_1fr] max-w-7xl min-h-screen mx-auto pt-30 pb-4 bg-transparent px-6 gap-y-4
      md:grid-cols-2 md:grid-rows-1 md:px-8 md:gap-x-10"
    >
      <button
        onClick={goBack}
        className="absolute top-19 lg:top-18 left-8 w-fit inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 text-sm lg:text-md px-2 py-1 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors z-10"
      >
        <MoveLeft className="w-4 lg:w-4" />
        Volver
      </button>

      {/* MAIN */}
      <section className="w-full h-fit grid grid-rows-[1fr_auto] justify-items-center gap-y-10">
        {/* Main Image */}
        <div className="relative w-full max-h-60 md:min-h-100 md:max-h-100 flex justify-center items-center py-30 overflow-hidden group rounded-xl bg-white dark:bg-gray-900 shadow-xl shadow-blue-400/50">
          <Image
            width={500}
            height={500}
            src={images[currentIndex]}
            alt={`${product.name} - Vista ${currentIndex + 1}`}
            className="w-50 md:w-60 lg:w-80 xl:w-90 object-contain transition-transform duration-500 group-hover:scale-105"
          />

          {/* Navigation Arrows */}
          <NavigationArrows
            images={images}
            prevImage={prevImage}
            nextImage={nextImage}
          />

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </div>
        </div>
        {/* Panel de Navegacion de Imagenes */}
        {images.length > 1 && (
          <aside className="flex flex-wrap flex-row gap-3 overflow-x-auto p-2 bg-white dark:bg-transparent mt-2">
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
      </section>

      {/* MAIN ARTICLE */}
      <article className="w-full h-fit flex flex-col justify-between gap-y-2">
        {/* NOMBRE / ESTADO / TALLA */}
        <div className="flex flex-col items-start gap-y-6">
          <section className="flex flex-col">
            <span className="text-gray-800 dark:text-gray-300 text-sm inline-flex justify-start items-center gap-1">
              {product.state === "Usado" ? (
                <Check color="#00AA00" size={15}></Check>
              ) : (
                <Sparkles size={15} color="#AAAA00"></Sparkles>
              )}{" "}
              {product.state}
            </span>
            <h2 className="inline-flex gap-2 text-2xl md:text-4xl font-bold uppercase text-gray-900 dark:text-white tracking-widest">
              {product.name}
              {(product.category === "Calzado" ||
                product.category === "Prenda") && (
                <span className="text-sm md:text-lg font-semibold text-gray-800 dark:text-gray-400 tracking-normal">
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
            <h4 className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-300">
              {formatPrice(priceVES, "VES")}
            </h4>
            <div className="text-sm md:text-md text-gray-900 dark:text-gray-300 font-medium self-start mt-2">
              Efectivo, Pago Movil, Transferencia Bancaria
            </div>
          </div>
          {/* DESCRIPCION Y CARACTERISTICAS */}
          <>
            <p className={`text-sm md:text-lg ${backdropForFeatures}`}>
              Una camisa clásica de corte regular, confeccionada en tela ligera
              y transpirable que garantiza comodidad durante todo el día.{" "}
            </p>
            {product.keyFeatures.length > 0 && (
              <div className={`${backdropForFeatures} w-full`}>
                <div className="text-lg md:text-xl xl:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Caracteristicas
                </div>
                <ul className="text-gray-900 dark:text-gray-300 list-none list-inside space-y-2">
                  {product.keyFeatures.map((car, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-sm md:text-md xl:text-lg text-gray-800 dark:text-gray-300 tracking-wide"
                    >
                      <span className="shrink-0 bg-green-500 rounded-full px-1.5">
                        <Check className="shrink-0 w-3 text-green-800"></Check>
                      </span>
                      {car}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
          {/* STOCK / COLOR / MARCA */}
          <div
            className={`${backdropForFeatures} w-full flex flex-col gap-y-2`}
          >
            {(product.category === "Calzado" ||
              product.category === "Prenda") && (
              <div className="text-sm md:text-lg flex justify-between gap-2 font-medium dark:text-gray-200 text-gray-700">
                Color
                <span className="text-sm md:text-md text-gray-900 bg-green-200 dark:bg-green-600 border border-green-400 px-2 py-1 rounded-full">
                  {product.color}
                </span>
              </div>
            )}
            <div className="text-sm md:text-lg flex items-center justify-between gap-2 font-medium dark:text-gray-300 text-gray-700">
              Cantidad
              <div className="text-md md:text-lg dark:text-white text-gray-900">
                {product.stock} Productos
              </div>
            </div>
            {product.category === "Prenda" && (
              <div className="text-sm md:text-lg flex justify-between gap-2 font-medium dark:text-gray-300 text-gray-700">
                Marca:
                <span className="text-sm md:text-lg dark:text-white text-gray-900 italic">
                  {product.brand}
                </span>
              </div>
            )}

            {/* BOTONES */}
            <div className="w-full inline-flex justify-evenly items-center gap-x-4 self-end mt-6">
              <button
                className="text-sm md:text-lg py-2 px-3 md:py-2 md:px-4 inline-flex grow justify-center items-center gap-x-2 bg-transparent border-2 border-blue-600 rounded-md text-black dark:text-white self-center cursor-pointer hover:text-white hover:bg-blue-600 active:bg-blue-500"
                onClick={copyActualURL}
              >
                <ClipboardCopy size={18}></ClipboardCopy>Copiar URL
              </button>
              <Link
                className="text-sm md:text-lg py-2 px-3 md:py-2 md:px-4 inline-flex grow-2 justify-center items-center gap-x-2 bg-blue-800 rounded-md text-white self-center cursor-pointer hover:bg-blue-600"
                href={"https://wa.me/+584123087333"}
                target="_blank"
              >
                <WSP></WSP>
                Comprar
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
