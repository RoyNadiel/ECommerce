import ProductCard from "./ProductCard";
import { Product } from "../types";

const product:Product = {
    id: '1',
    name: "Product Name",
    description: "This is a product description.",
    price: 19.99,
    imageUrl: "/Sharingan.png"
}


export default function Start(){
    return (
        <div className="flex flex-col justify-center items-center text-center h-auto pt-20 px-15 bg-blue-900">
            <section>
                <h1 className="text-4xl font-bold mb-4">Welcome to the Start Page</h1>
                <p className="text-lg mb-8">Search products in the search bar above ↑</p>
            </section>

            <section className="h-auto grid grid-cols-4 grid-rows-6 gap-4 w-full border-2 border-blue-500 p-4 rounded-lg">
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">
                    
                </div>
                <ProductCard product={product}/>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">
                
                </div>

                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
                <div className="col-span-2 row-span-1 bg-blue-300 p-2 rounded-lg h-50">

                </div>
            </section>
        </div>
    )
}