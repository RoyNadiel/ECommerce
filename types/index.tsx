//types/index.tsx
export interface Product{
  status: string;
  name: string;
  price: number;
  paymentMethod: string;
  color: string;
  stock: number;
  image_url: string;
}
export interface Shoe{
  shoes_id: number;
  brand:string;
  size:string;
  price:number;
  bcvRate: number;
  color:string;
  image_url:string;
}