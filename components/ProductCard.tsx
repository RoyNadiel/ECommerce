import type { Product } from '../types';
import Image from 'next/image';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return(
        <div className="flex h-full rounded-lg col-span-2 row-span-1 bg-transparent ">
            <div className='w-80 h-full flex justify-center items-center bg-gray-300 rounded-l-lg'>
                <Image src={product.imageUrl} alt={product.name} className="rounded-t-lg" width={150} height={150}/>
            </div>
            <div className='w-full h-full flex flex-col justify-center items-center gap-3 bg-blue-300/90 rounded-r-lg'>
                <h3 className="text-xl font-bold mt-2">{product.name}</h3>
                <p className="text-gray-500 mt-1">{product.description}</p>
                <p className="text-lg font-semibold text-green-600 mt-2">${product.price}</p>
            </div>
        </div>        
    )
}