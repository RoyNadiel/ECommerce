"use client";
import { useBcvRate } from "@/app/BcvRateProvider.client";
import { useRouter } from "next/navigation";
import ProductDetails from "../../components/ProductDetails";
import { Product } from "../../utils/types/types.";

export default function ProductDetailsClient({ product }: { product: Product }) {
  const router = useRouter();
  const bcvRate = useBcvRate();
  const priceVES = product.price * bcvRate;

  return (
    <ProductDetails
      product={product}
      priceVES={priceVES}
      onDeselectProductAction={() => router.back()}
    />
  );
}
