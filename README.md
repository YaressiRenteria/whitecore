# White Core

Catálogo web de AirPods, EarPods, cables y cargadores OEM de excelente calidad.
Los pedidos se hacen por WhatsApp.

## Tecnologías

- React 19 y Vite
- Tailwind CSS 4
- framer-motion (animaciones)
- lucide-react y react-icons (iconos)

## Cómo correrlo

```bash
npm install
npm run dev          # desarrollo en http://localhost:5173
npm run dev:host     # desarrollo accesible desde tu celular en la misma red wifi
npm run build        # genera la carpeta dist/ lista para publicar
npm run preview      # prueba localmente lo que generó el build
npm run lint         # revisa el código
```

## Estructura

```
public/
  logo.png
  products/            fotos de productos (.jpeg)
src/
  components/
    layout/            Navbar
    hero/              Hero
    benefits/          Benefits
    delivery/          DeliveryPoints
    featured/          FeaturedProducts
    catalog/           Catalog
    footer/            Footer
    floating/          WhatsAppFloat
  data/
    products.js        catálogo (nombre, precio, foto, garantía)
    categories.js      categorías del filtro
    site.js            número de WhatsApp y utilidades
  styles/
    colors.css         paleta
    variables.css      radios, sombras, transiciones
    animations.css     animaciones globales
  App.jsx
  main.jsx
  index.css
```

## Tareas frecuentes

**Cambiar el número de WhatsApp:** edita `WHATSAPP` en `src/data/site.js`
(código de país + número, sin + ni espacios).

**Agregar un producto:**

1. Guarda la foto en `public/products/` (de preferencia en WebP).
2. Agrega un objeto en `src/data/products.js`:

```js
{
  id: 12,
  name: "Nombre del producto",
  category: "Audio",          // Audio, Cables o Cargadores
  price: 250,
  image: "/products/archivo.jpeg",
  warranty: "3 días",
  featured: false,            // true = aparece en destacados
  description: "Descripción corta.",
}
```

**Cambiar colores:** edita `src/styles/colors.css`.

## Publicar

Funciona en Vercel, Netlify o Cloudflare Pages:

- Comando de build: `npm run build`
- Carpeta de salida: `dist`

No subas la carpeta `dist` a mano al repositorio: se genera sola en cada build.