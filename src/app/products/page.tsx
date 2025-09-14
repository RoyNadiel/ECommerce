import { getShoes } from "../services/supabase/FetchProducts";
import Products from "./Products";

export const revalidate = 60 // segundos

export default async function ProductsPage() {

  const shoes = await getShoes();
   if (!shoes.length) return <h1>No products found</h1>;
  return <Products shoes={shoes} />;
}