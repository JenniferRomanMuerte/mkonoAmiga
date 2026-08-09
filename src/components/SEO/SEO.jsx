import { Helmet } from 'react-helmet-async'

const SITE_NAME = 'Mkono Amiga'
// TODO: actualizar VITE_SITE_URL en .env cuando tengáis el dominio real
const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://mkonoamiga.netlify.app'
// Imagen que se muestra al compartir el enlace cuando la página no indica otra
const OG_IMAGE_POR_DEFECTO = '/img/imgHero.webp'

function SEO({ title, description, path = '', image = OG_IMAGE_POR_DEFECTO }) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME
  const canonical = `${SITE_URL}${path}`
  // Las redes sociales exigen URL absoluta, así que aceptamos ruta relativa o completa
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type"        content="website" />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url"         content={canonical} />
      <meta property="og:image"       content={ogImage} />
      <meta property="og:locale"      content="es_ES" />

      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:title"       content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image"       content={ogImage} />
    </Helmet>
  )
}

export default SEO
