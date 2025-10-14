import { products } from "../../data/products";
import { use } from "react";
import ProductDetailsClient from "./ProductDetailsClient"; // 👈 client wrapper

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const product = products.find((p) => p.product_id.toString() === id);
  if (!product) return <h1>Producto no encontrado</h1>;

  return <ProductDetailsClient key={product.product_id} product={product} />;
}
