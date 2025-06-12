import Image from 'next/image';
import { Product } from '../types';

interface ProductProps {
    status: Product['status'];
    name: Product['name'];
    price: Product['price'];
    paymentMethod: Product['paymentMethod'];
    color: Product['color'];
    stock:Product['stock'];
    image_url:Product['image_url'];
}

export function ProductDetails({ status, name, price, paymentMethod, color, stock, image_url }: ProductProps){
    return(
        <div className='rounded-md bg-productBg border-4 border-blue-600
        xl:w-700 xl:h-500 xl:inline-flex
        '>
            <div className='imageCenter'>
                <Image src={image_url} alt={name} width={450} height={450}/>
            </div>
            <section className='flex-col grow w-full h-full'>
                <article className='
                xl:w-full xl-h-full
                '>
                    <p className='text-gray-600 text-sm self-start'>{status}</p>
                    <h2 className='productTitle'>{name}</h2>
                    <h3 className='text-5xl font-bold text-green-900'>US${price}</h3>
                    <p className='text-gray-600 selft-start'>Metodos de Pago: {paymentMethod}</p>
                    <p className='text-gray-800 text-sm selft-start'>Efectivo, Pago Movil, Transferencia Bancaria</p>
                    <p className='text-sm text-gray-800'>Color: {color}</p>
                    <p>Stock: {stock}</p>
                    <button className='bg-sectionBg rounded-md text-white self-center text-3xl
                    xl:w-100 xl:h-25
                    '></button>
                </article>
            </section>
        </div>
    )
}