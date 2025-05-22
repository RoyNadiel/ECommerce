// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // Agregamos nuestra fuente 'cascadia' y le decimos que use la variable CSS
        geist: ['var(--font-geist-mono)', 'monospace'], // 'monospace' como fallback genérico
        // Puedes mantener otras fuentes por defecto de Tailwind o añadir las tuyas
      },
    },
  },
  plugins: [],
};