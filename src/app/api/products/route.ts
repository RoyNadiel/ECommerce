// src/app/api/products/route.ts
import { NextResponse } from 'next/server';
import { getDb } from '../../../../lib/db';
import { Shoe } from '../../../../types'

let shoes :Shoe[] = [];
let error:string = '';

export async function GET() {
  const db = getDb();
  try{
        if (!db) {
          throw new Error('Database connection is not available.');
        }
        const stmt = db.prepare('SELECT * FROM Shoes');
        shoes = stmt.all() as Shoe[];
        // console.log('Fetched shoes:', shoes);
      }catch (err) {
        console.error('Error fetching shoes:');
        error = 'Failed to fetch shoes: \n' + err;
      }
//   const products = db.prepare('SELECT * FROM products').all();
  return NextResponse.json(shoes);
}