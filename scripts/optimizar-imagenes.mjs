// Optimiza las imágenes de public/img: reduce el ancho y recomprime en WebP.
//
// Uso:
//   npm run optimizar-imagenes                   → toda la carpeta public/img
//   npm run optimizar-imagenes -- ruta/a/foto.webp → solo los archivos indicados
//
// Sobrescribe el archivo original solo si el resultado pesa claramente menos.
// Pensado para pasarlo al añadir imágenes nuevas: volver a pasarlo sobre las ya
// optimizadas vuelve a comprimirlas y pierde calidad sin apenas ahorro.

import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const CARPETA = 'public/img'

const ANCHO_MAX = 1600
const CALIDAD   = 70

// Solo se sobrescribe si el nuevo archivo pesa como mucho este porcentaje del original
const AHORRO_MIN = 0.9

// Ajustes propios para imágenes concretas (clave: nombre del archivo)
const AJUSTES = {
  // En Programas.scss queda tapada al 88–92 % por un degradado: admite mucha menos calidad
  'textura-carta.webp': { ancho: 800, calidad: 50 },
}

// Favicon: PNG cuadrado y pequeño con fondo transparente
const FAVICON = 'imgMkonoAmiga.png'
const FAVICON_LADO = 192

async function listarImagenes(carpeta) {
  const entradas = await fs.readdir(carpeta, { withFileTypes: true })
  const archivos = await Promise.all(entradas.map((e) => {
    const ruta = path.join(carpeta, e.name)
    return e.isDirectory() ? listarImagenes(ruta) : [ruta]
  }))
  return archivos.flat().filter((f) => /\.(webp|png)$/i.test(f))
}

async function optimizar(ruta) {
  const nombre = path.basename(ruta)
  // Leemos a memoria: en Windows, si sharp abre el archivo, no deja sobrescribirlo después
  const original = await fs.readFile(ruta)
  let imagen = sharp(original).rotate() // respeta la orientación EXIF antes de descartar metadatos

  if (nombre === FAVICON) {
    imagen = imagen
      .resize(FAVICON_LADO, FAVICON_LADO, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ palette: true, compressionLevel: 9 })
  } else if (/\.webp$/i.test(nombre)) {
    const { ancho = ANCHO_MAX, calidad = CALIDAD } = AJUSTES[nombre] ?? {}
    imagen = imagen
      .resize({ width: ancho, withoutEnlargement: true })
      .webp({ quality: calidad, effort: 6 })
  } else {
    return { ruta, estado: 'ignorada' }
  }

  const nuevo = await imagen.toBuffer()

  if (nuevo.length > original.length * AHORRO_MIN) {
    return { ruta, estado: 'sin cambios', antes: original.length, despues: original.length }
  }

  await fs.writeFile(ruta, nuevo)
  return { ruta, estado: 'optimizada', antes: original.length, despues: nuevo.length }
}

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`

const rutas = process.argv.length > 2 ? process.argv.slice(2) : await listarImagenes(CARPETA)
let totalAntes = 0
let totalDespues = 0

for (const ruta of rutas) {
  const r = await optimizar(ruta)
  if (r.estado === 'ignorada') continue
  totalAntes += r.antes
  totalDespues += r.despues
  console.log(`${r.estado.padEnd(12)} ${r.ruta.padEnd(45)} ${kb(r.antes).padStart(8)} → ${kb(r.despues)}`)
}

console.log(`\nTotal: ${kb(totalAntes)} → ${kb(totalDespues)}`)
