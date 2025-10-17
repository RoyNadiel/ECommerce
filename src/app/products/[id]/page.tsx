import { productsArray } from "../../data/products";
import { use } from "react";
import ProductDetailsClient from "./ProductDetailsClient";

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const products = productsArray.find((p) => p.product_id.toString() === id);
  if (!products) return <h1>Producto no encontrado</h1>;

  return <ProductDetailsClient key={products.product_id} product={products} />;
}
