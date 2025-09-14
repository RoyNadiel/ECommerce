"use client";
import { createContext, useContext, ReactNode } from "react";

const BcvRateContext = createContext<number>(1);

export function BcvRateProviderClient({
  rate,
  children,
}: {
  rate: number;
  children: ReactNode;
}) {
  return (
    <BcvRateContext.Provider value={rate}>{children}</BcvRateContext.Provider>
  );
}

export function useBcvRate() {
  return useContext(BcvRateContext);
}
