'use client';
import { Shoe } from '../types';
import Image from 'next/image';

interface ShoeCardProps{
    shoes_id: Shoe['shoes_id'];
    brand: Shoe['brand'];
    size: Shoe['size'];
    price: Shoe['price'];
    // color: Shoe['color'];
    image_url: Shoe['image_url'];
    shareId: (value:number) => void;
}

export default function ProductCard({ shoes_id , brand, size, price, image_url, shareId }: ShoeCardProps){    

    return (
        <div onClick={() => shareId(shoes_id)} className='h-fit w-25 static bg-productBg rounded-md p-2 mb-8 text-center hover:scale-105 hover:bg-blue-300 transition-all cursor-pointer duration-250
        md:w-40 md:min-h-fit md:max-h-75
        xl:flex xl:w-70 xl:h-40'>
            <div className='flex justify-center items-center'>
                <Image src={image_url} alt={brand} className="rounded-t-lg aspect-square object-contain"
                 width={130} height={100}/>
            </div>
            
            <div className='flex pt-3 flex-grow flex-col justify-between gap-2 overflow-hidden md:p-2 xl:p-2'>
                <h2 className="productTitle text-center tracking-wider">{brand}</h2>
                <p className='text-md text-gray-900 overflow-hidden text-ellipsis hidden md:block'>Talla # <span className="text-md text-gray-800 overflow-hidden text-ellipsis hidden md:block">{size}</span></p>
                <h3 className="text-lg font-bold align-text-bottom text-green-900">${price}</h3>
            </div>
        </div>
    )
}