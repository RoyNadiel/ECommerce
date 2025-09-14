export type Shoe = {
  shoes_id?: number;
  name:string;
  size:string;
  price:number;
  bcvRate?: number;
  color?:string;
  image_url:string;
  categories: {
    name: string | null
  };
}

export type Categories = {
  Calzado: string;
  Prenda:string;
  Farmaco: string;
}
export type BcvRate = {
  "current": {
    "usd": number,
    "eur": number,
    "date": string
  },
  "previous": {
    "usd": number,
    "eur": number,
    "date": string
  },
  "changePercentage": {
    "usd":number,
    "eur": number
  }
}