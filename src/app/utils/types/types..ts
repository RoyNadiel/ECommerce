export type BaseProduct = {
  product_id: number;
  name: string;
  price: number;
  state: 'Nuevo' | 'Usado';
  stock: number;
  caracteristicas: string[],
  image_url: string;
};

export type Shoe = BaseProduct & {
  category: "Calzado";
  shoes_id?: number;
  size?: string;
  color?: string;
};

export type Prenda = BaseProduct & {
  category: "Prenda";
  prenda_id?: number;
  size?: number;
  brand?: string;
  color?:string
};

export type Farmaco = BaseProduct & {
  category: "Farmaco";
  farmaco_id?: number;
};

export type Product = Shoe | Prenda | Farmaco;

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