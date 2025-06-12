import Database from "better-sqlite3";
import type { Database as DatabaseType } from "better-sqlite3";
import path from 'path';

const dbPath = path.join(process.cwd(), '/ShopDB/ShopDataBase.db');

let db: DatabaseType | null = null;

function getDb(){
    if (!db){
        try{
            db = new Database(dbPath);
            console.log('Conexión a la base de datos SQLite establecida en: ', dbPath);

        }
        catch (error){
            console.error('Error al conectar a la bases de datos SQLite')
        }
    }
    return db;
}

export {getDb};