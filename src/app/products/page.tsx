import { products } from "../data/products";
import Products from "./Products";

export const revalidate = 60; // segundos

export default async function ProductsPage() {
  return <Products products={products} />;
}
