import { Track } from '../types';
import Image from 'next/image';

interface TrackCardProps{
    Name: Track['Name'];
    Composer: Track['Composer'];
    UnitPrice: Track['UnitPrice'];
}
export default function ProductCard({ Name, Composer, UnitPrice }: TrackCardProps) {
    return (
        <div className='h-fit w-25 bg-blue-300/90 rounded-md py-2 mb-8 text-center hover:scale-105 hover:bg-blue-300 transition-all cursor-pointer duration-250
        md:w-40 md:h-75
        xl:flex xl:gap-2 xl:w-80 xl:h-40'>
            {/* <div className='flex shrink-0 grow-0 justify-center items-center'>
                <Image src={null} alt={product.name} className="rounded-t-lg"
                 width={100} height={100}/>
            </div> */}
            <div className='p-2 flex flex-col justify-between gap-2 overflow-hidden'>
                <h2 className="font-bold text-sm md:text-lg text-gray-950 uppercase text-center">{Name}</h2>
                <p className="text-sm text-gray-800 overflow-hidden text-ellipsis hidden md:block">{Composer}</p>
                <h3 className="text-lg font-bold align-text-bottom text-green-800">${UnitPrice}</h3>
            </div>
        </div>  
    )
}