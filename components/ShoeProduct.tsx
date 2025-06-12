"use client";
import Image from 'next/image';
import { Shoe } from '../types';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ShoeCardProps {
    shoes_id: Shoe['shoes_id']
    brand: Shoe['brand'];
    size: Shoe['size'];
    price: Shoe['price'];
    bcvRate: Shoe['bcvRate'];
    color: Shoe['color'];
    image_url: Shoe['image_url'];
    onDeselectProduct: () => void;    
}
export default function ShoeProduct({ shoes_id, brand, size, price, bcvRate, color, image_url, onDeselectProduct }: ShoeCardProps){

    return (
        <div className='w-screen h-screen fixed bg-productBg/50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 px-30 py-50
        sm:flex sm:p-40 sm:px-25 sm:top-1/2 sm:left1/2 sm:-translate-x-1/2 sm:-translate-y-1/2
        md:flex md:p-40 md:px-50 md:top-1/2 sm:left1/2 md:-translate-x-1/2 md:-translate-y-1/2
        xl:flex xl:p-50 xl:px-80 xl:top-1/2 sm:left1/2 xl:-translate-x-1/2 xl:-translate-y-1/2
        '>
            <div className='flex max-w-100 justify-center items-center relative bg-blue-400 border-4 border-r-0 border-blue-500 rounded-l-md'>
                <Swiper 
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{clickable: true}}
                navigation
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                >
                    <SwiperSlide><Image src={image_url} alt={brand} width={700} height={550} className='aspect-square object-contain' /></SwiperSlide>
                    <SwiperSlide><Image src="/products/Sharingan.png" alt="Rinnegan" width={500} height={550} className='aspect-square object-contain' ></Image></SwiperSlide>
                </Swiper>
            </div>
            <section className='flex-col w-full h-auto relative bg-productBg border-4 border-l-0 border-blue-500 rounded-r-md'>
                    
                <article className='h-full flex flex-col grow px-8 py-5 bg-productBg
                xl:w-full
                '>                    
                    <div className=''>
                        <p className='text-gray-700 text-sm flex justify-between items-center'>Nuevo <button onClick={onDeselectProduct} className='w-8 h-5 flex cursor-pointer justify-center items-center hover:bg-blue-400 hover:text-black'>X</button></p>
                        <h2 className='text-3xl uppercase text-gray-900'>{brand}</h2>
                        <p className='text-lg text-gray-800'>Talla #{size}</p>
                    </div>
                    <div className='sm:mt-auto md:mt-auto xl:mt-auto'>
                        <h3 className='text-2xl font-bold text-green-800'>{price.toFixed(2)} $US</h3>
                        <p className='text-lg text-green-800'>{(bcvRate * price).toFixed(2)} Bs.</p>
                        <p className='text-gray-700 selft-start'>Metodos de Pago:</p>
                        <p className='text-gray-900 text-sm selft-start'>Efectivo, Pago Movil, Transferencia Bancaria</p>
                    </div>
                    <div className='sm:mt-auto md:mt-auto xl:mt-auto'>
                        <p className='flex gap-2 text-md text-gray-700'>Color:<span className='text-md text-gray-900'>{color}</span></p>
                        <p className='flex gap-2 text-md text-gray-700'>Stock:<span className='text-gray-900'>1</span></p>
                    </div>
                    <button className='w-30 h-8 bg-sectionBg rounded-md text-white text-sm mt-auto self-center cursor-pointer hover:bg-blue-600
                    xl:w-60 xl:h-10 xl:text-2xl
                    '>Comprar</button>
                </article>
            </section>
        </div>
    )
}