import ProductCard from "./ProductCard";
import { Track } from "../types";
import { spaceMono } from "../public/fonts";
import { getDb } from '../lib/db';

let tracks: Track[] = []
let error:string = '';

function SetUpGridColums (){
    
}

export default async function Start(){
    const db = getDb();
    try{
      if (!db) {
        throw new Error('Database connection is not available.');
      }
      const stmt = db.prepare('SELECT TrackId, Name, Composer, UnitPrice FROM tracks LIMIT 20');
      tracks = stmt.all() as Track[];
    }catch (err) {
      console.error('Error fetching tracks:');
      error = 'Failed to fetch tracks: \n' + err;
    }

    return (
        <div className="h-min-screen pt-25 px-1        
        md:px-15">
            <section className="text-center">
                <h1 className={` ${spaceMono.className} text-5xl font-bold mb-4`}>Welcome to the Start Page</h1>
                <p className="text-lg mb-8">Search products in the search bar above ↑</p>
            </section>

            <section role="container" className="grid grid-cols-3 w-full justify-items-center
            p-5 rounded-lg border-2 border-blue-500 bg-blue-800
            md:grid-cols-5 md:gap-5
            xl:grid-cols-4 xl:gap-10">
                <h4 className={`${spaceMono.className} col-span-full text-3xl tracking-widest`}>DISPONIBLES</h4>
                {error && <p className='text-xl tracking-wide'>{error}</p>}
                {Array.isArray(tracks) && tracks.length === 0 && !error ? (
                  <p>No hay tracks de música disponibles o la base de datos está vacía.</p>
                ) : (
                    tracks.map((track:Track) => (
                        <ProductCard 
                        key={track.TrackId}
                        Name={track.Name}
                        Composer={track.Composer}
                        UnitPrice={track.UnitPrice}/>
                    ))
                )}
            </section>
        </div>
    )
}