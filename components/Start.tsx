'use client';
import ProductCard from "./ProductCard";
import ShoeProduct from "./ShoeProduct";
import { Shoe } from "../types";
import { useState, useEffect } from 'react';
import { fetchProducts } from '@/app/lib/api';
import { getDollarExchangeRates } from '@/app/lib/api';

export default function Start(){
  const [idProduct, setIdProduct] = useState<number | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Shoe | null>(null);

  const [shoes, setShoes] = useState<Shoe[]>([]);
  const [errorPrdoucts, setErrorProducts] = useState('');

  useEffect(() => {
    fetchProducts()
      .then(setShoes)
      .catch(err => setErrorProducts(err.message));
  }, []);

  const handleClick = (id:number) => {
    setIdProduct(id);
    const product = shoes.find(shoe => shoe.shoes_id === id);
    setSelectedProduct(product || null);
    document.body.classList.add('overflow-hidden');
    console.log('Producto seleccionado:', product);
  }
  const onDeselectProduct = () => { setSelectedProduct(null); document.body.classList.remove('overflow-hidden'); };


  const[bcvRate, setBcvRate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAndSetBcvRate() {
      try {
        const data = await getDollarExchangeRates(); // Llamamos a nuestra función de fetch

        if (data && data.monitors && data.monitors.bcv) {
          setBcvRate(data.monitors.bcv.price);
        } else {
          setError("No se pudo obtener el precio del BCV de la API.");
        }
      } catch (err: any) {
        setError(err.message || "Error desconocido al obtener la tasa del BCV.");
        console.error("Error al obtener la tasa del BCV:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchAndSetBcvRate();
  }, []); // El array vacío asegura que este efecto se ejecute solo una vez al montar


    return (
        <div className="h-min-screen pt-10 py-5 px-1
        md:px-15">
            <section className="text-center">
                <h1 className='text-5xl font-sen font-bold mb-4'>El Tirano Shop</h1>
                {/* <p className="font-inconsolata[400] text-lg mb-8">Search products in the search bar above ↑</p> */}
            </section>

            <section role="container" className="grid grid-cols-3 w-full justify-items-center
            p-5 rounded-lg border-2 border-blue-500 bg-blue-800
            md:grid-cols-4 md:gap-5
            xl:grid-cols-4 xl:gap-10">
                <h4 className='font-inconsolata col-span-full text-4xl tracking-widest'>DISPONIBLE</h4>
          {errorPrdoucts && <p className='text-xl tracking-wide'>{errorPrdoucts}</p>}
          {Array.isArray(shoes) && shoes.length === 0 && !errorPrdoucts ? (
                  <p>No hay zapatos disponibles o la base de datos está vacía.</p>
                ) : (
              shoes.map((shoe:Shoe) => (
                        <ProductCard
                            key={shoe.shoes_id}
                            shoes_id={shoe.shoes_id}
                            brand={shoe.brand}
                            size={shoe.size}
                            price={shoe.price}                            
                            color={shoe.color}
                            image_url={shoe.image_url}                            
                            shareId={handleClick}
                        />
                    ))
                ) }

                {selectedProduct && 
                <ShoeProduct 
                shoes_id={selectedProduct.shoes_id}
                brand={selectedProduct.brand}
                size={selectedProduct.size}
                price={selectedProduct.price}
                bcvRate={bcvRate ?? 0}
                color={selectedProduct.color}                
                image_url={selectedProduct.image_url}
                onDeselectProduct={onDeselectProduct}>
                  
                </ShoeProduct>
                }
            </section>
        </div>
    )
}