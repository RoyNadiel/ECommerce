import { BcvRate } from "@/app/types/types.";

export default async function FetchBcvRate(): Promise<string> {
  const res = await fetch('https://api.dolarvzla.com/public/exchange-rate');
  if (!res.ok) {
    throw new Error(`Fail fetching BCV Rate: ${res.status}`);
  }
  const apiRes:BcvRate = await res.json();
  const bcvRate:number = apiRes.current.usd;
  return bcvRate.toFixed(2);
}