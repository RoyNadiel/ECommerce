import { Shoe, Prenda, Farmaco } from "../utils/types/types.";

const converse: Shoe = {
  product_id: 1,
  shoes_id: 1,
  name: "Converse",
  price: 55,
  state: "Nuevo",
  size: "40",
  brand: "Converse",
  color: "Rojo",
  stock: 5,
  caracteristicas: ["Originales", "Botines", "ALL STAR"],
  image_url: "/products/converse-1.png",
  category: "Calzado",
};
const camisa: Prenda = {
  product_id: 2,
  prenda_id: 1,
  name: "Camisa",
  price: 20,
  state: "Usado",
  size: 15,
  brand: "Gucci",
  color: "Blanca",
  stock: 10,
  caracteristicas: [],
  image_url: "/products/camisa-larga.png",
  category: "Prenda",
};
const diclofenac: Farmaco = {
  product_id: 3,
  farmaco_id: 1,
  name: "Diclofenac",
  price: 55,
  state: "Nuevo",
  stock: 5,
  caracteristicas: [],
  image_url: "/products/diclofenac.png",
  category: "Farmaco",
};

const zapato1: Shoe = {
  product_id: 4,
  shoes_id: 2,
  name: "Converse",
  price: 45,
  state: "Nuevo",
  size: "42",
  brand: "Converse",
  color: "Blanco",
  stock: 2,
  caracteristicas: ["Originales", "Botines", "ALL STAR"],
  image_url: "/products/converse-2.png",
  category: "Calzado",
};

const zapato2: Shoe = {
  product_id: 5,
  shoes_id: 3,
  name: "Nike",
  price: 55,
  state: "Nuevo",
  size: "35",
  brand: "Nike",
  color: "Blanco",
  stock: 10,
  caracteristicas: ["Originales", "Botines", "ALL STAR"],
  image_url: "/products/nike-1.png",
  category: "Calzado",
};

const zapato3: Shoe = {
  product_id: 6,
  shoes_id: 5,
  name: "Nike",
  price: 100,
  state: "Nuevo",
  size: "35",
  brand: "Nike",
  color: "Azul",
  stock: 20,
  caracteristicas: ["Originales", "Botines", "ALL STAR"],
  image_url: "/products/nike-3.png",
  category: "Calzado",
};

const zapato4: Shoe = {
  product_id: 7,
  shoes_id: 5,
  name: "Nike",
  price: 55,
  state: "Nuevo",
  size: "35",
  brand: "Nike",
  color: "Blanco",
  stock: 10,
  caracteristicas: ["Originales", "Botines", "ALL STAR"],
  image_url: "/products/nike-4.png",
  category: "Calzado",
};

export const products = [
  converse,
  camisa,
  diclofenac,
  zapato1,
  zapato2,
  zapato3,
  zapato4,
];
