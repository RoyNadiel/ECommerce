// import { getShoes } from "../services/supabase/FetchProducts";
import { products } from "../data/products";
import Products from "./Products";

export const revalidate = 60; // segundos

export default async function ProductsPage() {
  // const shoes = await getShoes();
  //  if (!shoes.length === 0) return <h1 className="m-auto">No products found</h1>;

  return <Products products={products} />;
}
