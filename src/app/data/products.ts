import { Shoe, Prenda, Farmaco } from '../utils/types/types.'

const converse:Shoe = {
  product_id: 1,
  shoes_id: 1,
  name: 'Converse',
  price: 55,
  state: 'Nuevo',
  size: '40',
  color: 'Rojo',
  stock: 5,
  caracteristicas: [
    'Originales', 'Botines', 'ALL STAR'
  ],
  image_url: '/products/converse-1.png',
  category: 'Calzado'
}
const camisa:Prenda = {
  product_id: 2,
  prenda_id: 1,
  name: 'Camisa',
  price: 20,
  state: 'Usado',
  size: 15,
  brand: 'Gucci',
  color: 'Blanca',
  stock: 10,
  caracteristicas: [],
  image_url: '/products/camisa-larga.png',
  category: 'Prenda'  
}
const diclofenac:Farmaco = {
  product_id: 3,
  farmaco_id: 1,
  name: 'Diclofenac',
  price: 55,
  state: 'Nuevo',
  stock: 5,
  caracteristicas: [],
  image_url: '/products/diclofenac.png',
  category: 'Farmaco'
}

export const products = [
  converse,
  camisa,
  diclofenac
]