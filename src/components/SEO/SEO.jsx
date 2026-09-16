import { Helmet } from 'react-helmet-async'
import {
  SITE_NAME,
  SITE_URL,
  OG_IMAGE_POR_DEFECTO,
  OG_IMAGE_ANCHO,
  OG_IMAGE_ALTO,
  tituloCompleto,
  urlAbsoluta,
} from '../../data/sitio'

// Actualiza las etiquetas al navegar dentro de la web. Las que ven WhatsApp,
// Facebook o Google al entrar directamente se generan en el build a partir
// de src/data/rutas.js (ver vite.config.js).
function SEO({ title, description, path = '', image = OG_IMAGE_POR_DEFECTO }) {
  const pageTitle = tituloCompleto(title)
  const canonical = `${SITE_URL}${path}`
  const ogImage = urlAbsoluta(image)

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type"         content="website" />
      <meta property="og:site_name"    content={SITE_NAME} />
      <meta property="og:title"        content={pageTitle} />
      <meta property="og:description"  content={description} />
      <meta property="og:url"          content={canonical} />
      <meta property="og:image"        content={ogImage} />
      <meta property="og:image:width"  content={String(OG_IMAGE_ANCHO)} />
      <meta property="og:image:height" content={String(OG_IMAGE_ALTO)} />
      <meta property="og:locale"       content="es_ES" />

      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  )
}

export default SEO
