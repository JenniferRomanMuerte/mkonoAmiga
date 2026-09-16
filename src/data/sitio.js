// Datos generales del sitio y de la asociación.
// Es JavaScript sin JSX a propósito: lo usan tanto la web como el build
// (vite.config.js), que genera el sitemap y un HTML por página.

export const SITE_NAME = 'Mkono Amiga'
export const SITE_URL  = 'https://mkonoamiga.org'

// Imagen al compartir cuando la página no indica otra.
// JPG de 1200×630: algunas apps de mensajería no muestran bien las .webp
export const OG_IMAGE_POR_DEFECTO = '/img/og/og-portada.jpg'
export const OG_IMAGE_ANCHO = 1200
export const OG_IMAGE_ALTO  = 630

export const EMAIL = 'asociacion@mkonoamiga.org'

export const tituloCompleto = (title) => (title ? `${title} | ${SITE_NAME}` : SITE_NAME)

// Las redes sociales exigen URL absoluta, así que aceptamos ruta relativa o completa
export const urlAbsoluta = (ruta) => (ruta.startsWith('http') ? ruta : `${SITE_URL}${ruta}`)

// Datos estructurados (schema.org) que describen la asociación a los buscadores
export const DATOS_ESTRUCTURADOS = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/img/imgMkonoAmiga.png`,
  image: `${SITE_URL}${OG_IMAGE_POR_DEFECTO}`,
  description:
    'Asociación española sin ánimo de lucro que trabaja en el distrito de Buhweju (Uganda) por los derechos y la dignidad de niños y niñas con discapacidad.',
  email: EMAIL,
  taxID: 'G21748462',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madrid',
    addressCountry: 'ES',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Buhweju, Uganda',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: EMAIL,
    url: `${SITE_URL}/contacto`,
    availableLanguage: 'es',
  },
  sameAs: [
    'https://instagram.com/mkonoamiga',
    'https://mkonoamiga.blogspot.com',
  ],
}
