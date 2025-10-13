// app/products/[id]/page.tsx
import { products } from "../../data/products";
import ProductDetailsClient from "./ProductDetailsClient"; // 👈 client wrapper

type Props = { params: { id: string } };

export default async function ProductPage({ params }: Props) {
  const product = products.find((p) => p.product_id.toString() === params.id);
  if (!product) return <h1>Producto no encontrado</h1>;

  return <ProductDetailsClient key={product.product_id} product={product} />;
}
