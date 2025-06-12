// src/lib/api.ts
  
  export async function fetchProducts() {
    const res = await fetch('/api/products');
    if (!res.ok) throw new Error('Failed to fetch products');
    return res.json();
  }
  // export default async function getDollarExchangeRates() {
//     try {
//       const response = await fetch('https://pydolarve.org/api/v2/dollar');

//       if (!response.ok) {
//         throw new Error(`Error al cargar los datos: ${response.statusText}`);
//       }

//       const data = await response.json();
//       console.log("Respuesta completa de la API:", data);

//       // Accedemos a los monitores y mostramos sus precios
//       if (data && data.monitors) {
//         // console.log("\n--- Tasas de Cambio ---");
//         // for (const monitorName in data.monitors) {
//         //   if (Object.prototype.hasOwnProperty.call(data.monitors, monitorName)) {
//         //     const monitor = data.monitors[monitorName];
//         //     console.log(
//         //       `Monitor: ${monitor.title} (${monitorName}) - Precio: ${monitor.price.toFixed(2)} VES`
//         //     );
//         //     console.log(`  Última actualización: ${monitor.last_update}`);
//         //   }
//         // }
//         // console.log("-----------------------");
//         // console.log(data.monitors.bcv.price);
//         return data;
//       } else {
//         console.log("No se encontraron datos de monitores en la respuesta.");
//       }

//     } catch (error) {
//       console.error("Error al obtener las tasas de cambio:", error);
//     }
//   }

  // Llama a la función para ejecutar el fetch
  // getDollarExchangeRates();
  // src/app/lib/api.ts

// Definimos la interfaz para la estructura de la respuesta de la API
interface MonitorData {
  change: number;
  color: string;
  image: string;
  last_update: string;
  percent: number;
  price: number;
  price_old: number;
  symbol: string;
  title: string;
}

interface ExchangeRateResponse {
  datetime: {
    date: string;
    time: string;
  };
  monitors: {
    [key: string]: MonitorData;
  };
}

/**
 * Obtiene las tasas de cambio del dólar desde la API de PyDolarVE v2.
 * Esta función se ejecuta en el servidor.
 *
 * @returns {Promise<ExchangeRateResponse | null>} Los datos de las tasas de cambio o null si hay un error.
 */
export async function getDollarExchangeRates(): Promise<ExchangeRateResponse | null> {
  try {
    // La API es pública, pero en un entorno real, podrías considerar agregar revalidación o caché.
    // fetch por defecto en Next.js cachea automáticamente si el endpoint es estable.
    const response = await fetch('https://pydolarve.org/api/v2/dollar', { next: {revalidate: 3600}});

    if (!response.ok) {
      console.error(`Error al cargar los datos desde la API: ${response.statusText}`);
      // Lanza un error para que pueda ser capturado por un error.tsx o un try/catch superior
      throw new Error(`Failed to fetch exchange rates: ${response.statusText}`);
    }

    const data: ExchangeRateResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Hubo un problema al obtener las tasas de cambio:", error);
    return null;
  }
}