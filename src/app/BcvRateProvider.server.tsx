// app/providers/BcvRateProvider.server.tsx
import { ReactNode } from "react";
import { BcvRateProviderClient } from "./BcvRateProvider.client";
import { BcvRate } from "./types/types.";

async function fetchBcvRate(): Promise<number> {
  const res = await fetch("https://api.dolarvzla.com/public/exchange-rate", {
    next: { revalidate: 1800 }, // cache por 30min
  });

  if (!res.ok) {
    throw new Error("Error al obtener tasa del BCV");
  }

  const data:BcvRate = await res.json();
  return data?.current.usd ?? 0;
}

export default async function BcvRateProviderServer({ children }: { children: ReactNode }) {
  const rate = await fetchBcvRate();

  return (
    <BcvRateProviderClient rate={rate}>
      {children}
    </BcvRateProviderClient>
  );
}
