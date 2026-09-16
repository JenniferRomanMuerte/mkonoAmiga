// Lista única de las páginas del sitio. A partir de ella se generan:
// - las rutas de App.jsx
// - las etiquetas SEO de cada página (título, descripción, imagen al compartir)
// - en el build: sitemap.xml y un HTML por página con sus etiquetas ya puestas
//
// Para añadir una página: añádela aquí y su componente en src/paginas.js.
// Un test comprueba que ambas listas coinciden.

export const RUTAS = [
  {
    path: '/',
    title: 'ONG en Uganda — Ayuda a niños con discapacidad',
    description: 'ONG española que trabaja en Uganda para mejorar la vida de niños y niñas con necesidades especiales mediante atención médica, educación y apoyo familiar.',
    changefreq: 'monthly',
    priority: '1.0',
  },
  {
    path: '/quienes-somos',
    title: 'Quiénes somos — Asociación española en Uganda',
    description: 'Mkono Amiga es una asociación sin ánimo de lucro que trabaja en el distrito de Buhweju, Uganda, por los derechos y la dignidad de niños y niñas con discapacidad.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/programas',
    title: 'Nuestros programas',
    description: 'Seis programas de acción en Uganda: atención médica y rehabilitación, cirugías, educación inclusiva, nutrición infantil, apoyo a familias y sensibilización comunitaria.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/apoyanos',
    title: 'Apóyanos',
    description: 'Colabora con Mkono Amiga: donaciones económicas, voluntariado internacional, hazte socio o colabora desde tu empresa. Tu ayuda cambia vidas en Uganda.',
    changefreq: 'monthly',
    priority: '0.9',
  },
  {
    path: '/transparencia',
    title: 'Transparencia y buen gobierno',
    description: 'Consulta y descarga los documentos de transparencia de Mkono Amiga: código ético, política de protección infantil, igualdad de género, antifraude, voluntariado y canal de denuncias.',
    image: '/img/og/og-transparencia.jpg',
    changefreq: 'yearly',
    priority: '0.6',
  },
  {
    path: '/contacto',
    title: 'Contacto',
    description: 'Contacta con Mkono Amiga para donar, ser voluntario, hacerte socio o colaborar con nuestra ONG en Uganda.',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/aviso-legal',
    title: 'Aviso Legal',
    description: 'Información legal e identificativa de la asociación Mkono Amiga, en cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información.',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/privacidad',
    title: 'Política de Privacidad',
    description: 'Información sobre el tratamiento de datos personales por parte de Mkono Amiga, en cumplimiento del Reglamento General de Protección de Datos (RGPD).',
    changefreq: 'yearly',
    priority: '0.3',
  },
  {
    path: '/cookies',
    title: 'Política de Cookies',
    description: 'Información sobre el uso de cookies en el sitio web de Mkono Amiga y cómo gestionarlas desde tu navegador.',
    changefreq: 'yearly',
    priority: '0.3',
  },
]

// Datos SEO de una ruta, listos para pasar al componente <SEO />
export function seoDe(path) {
  const ruta = RUTAS.find((r) => r.path === path)
  if (!ruta) throw new Error(`La ruta ${path} no está en src/data/rutas.js`)
  const { title, description, image } = ruta
  return { title, description, image, path }
}
