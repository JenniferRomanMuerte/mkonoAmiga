// Plugin de Vite que usa src/data/rutas.js para:
// - poner en index.html las etiquetas SEO y los datos estructurados (también en desarrollo)
// - en el build, generar un HTML por página con sus propias etiquetas, para que
//   WhatsApp, Facebook y compañía (que no ejecutan JavaScript) vean el título,
//   la descripción y la imagen correctos al compartir un enlace
// - en el build, generar sitemap.xml y el _redirects de Netlify

import fs from 'node:fs/promises'
import path from 'node:path'
import { RUTAS } from '../src/data/rutas.js'
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE_POR_DEFECTO,
  OG_IMAGE_ANCHO,
  OG_IMAGE_ALTO,
  DATOS_ESTRUCTURADOS,
  tituloCompleto,
  urlAbsoluta,
} from '../src/data/sitio.js'

// El bloque que se sustituye en index.html
const MARCA_SEO = /<!-- seo -->[\s\S]*?<!-- \/seo -->/

const escapar = (texto) =>
  String(texto)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

// Página "/" → index.html · "/programas" → programas.html
const archivoDe = (ruta) => (ruta === '/' ? 'index.html' : `${ruta.slice(1)}.html`)

function etiquetasSeo({ path: ruta, title, description, image = OG_IMAGE_POR_DEFECTO }) {
  const titulo = escapar(tituloCompleto(title))
  const descripcion = escapar(description)
  const url = escapar(`${SITE_URL}${ruta}`)
  const imagen = escapar(urlAbsoluta(image))
  // "<" escapado para que ningún texto pueda cerrar la etiqueta <script>
  const jsonLd = JSON.stringify(DATOS_ESTRUCTURADOS).replace(/</g, '\\u003c')

  return `<!-- seo -->
    <title>${titulo}</title>
    <meta name="description" content="${descripcion}" />
    <link rel="canonical" href="${url}" />

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="${escapar(SITE_NAME)}" />
    <meta property="og:title" content="${titulo}" />
    <meta property="og:description" content="${descripcion}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${imagen}" />
    <meta property="og:image:width" content="${OG_IMAGE_ANCHO}" />
    <meta property="og:image:height" content="${OG_IMAGE_ALTO}" />
    <meta property="og:locale" content="es_ES" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${titulo}" />
    <meta name="twitter:description" content="${descripcion}" />
    <meta name="twitter:image" content="${imagen}" />

    <script type="application/ld+json">${jsonLd}</script>
    <!-- /seo -->`
}

function sitemap() {
  const urls = RUTAS.map(({ path: ruta, changefreq, priority }) => `  <url>
    <loc>${SITE_URL}${ruta}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

// Cada página se sirve con su HTML; cualquier otra ruta cae en la portada (SPA)
function redirecciones() {
  const reglas = RUTAS
    .filter(({ path: ruta }) => ruta !== '/')
    .map(({ path: ruta }) => `${ruta}  /${archivoDe(ruta)}  200`)
  return [...reglas, '/*  /index.html  200', ''].join('\n')
}

export default function paginas() {
  let dirSalida
  let esBuild = false

  return {
    name: 'mkono-paginas',

    configResolved(config) {
      dirSalida = path.resolve(config.root, config.build.outDir)
      esBuild = config.command === 'build'
    },

    transformIndexHtml(html) {
      if (!MARCA_SEO.test(html)) {
        throw new Error('index.html debe contener el bloque <!-- seo --> … <!-- /seo -->')
      }
      return html.replace(MARCA_SEO, etiquetasSeo(RUTAS.find((r) => r.path === '/')))
    },

    // closeBundle se ejecuta cuando index.html y la carpeta public ya están en dist
    async closeBundle() {
      if (!esBuild) return
      const base = await fs.readFile(path.join(dirSalida, 'index.html'), 'utf8')

      await Promise.all(RUTAS
        .filter(({ path: ruta }) => ruta !== '/')
        .map((ruta) => fs.writeFile(
          path.join(dirSalida, archivoDe(ruta.path)),
          base.replace(MARCA_SEO, etiquetasSeo(ruta)),
        )))

      await fs.writeFile(path.join(dirSalida, 'sitemap.xml'), sitemap())
      await fs.writeFile(path.join(dirSalida, '_redirects'), redirecciones())

      console.log(`\n${RUTAS.length} páginas generadas, sitemap.xml y _redirects actualizados`)
    },
  }
}
