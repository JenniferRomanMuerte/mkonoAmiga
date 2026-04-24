import { Link } from 'react-router-dom'
import './Programas.scss'

const programas = [
  {
    icono: '🏥',
    titulo: 'Atención médica y rehabilitación',
    descripcion:
      'Ofrecemos sesiones de fisioterapia, estimulación temprana y tratamientos médicos para mejorar la salud y autonomía de los niños.',
    mod: 'verde',
  },
  {
    icono: '⚕️',
    titulo: 'Cirugías médicas',
    descripcion:
      'Facilitamos el acceso a operaciones necesarias mediante colaboración con hospitales locales.',
    mod: 'naranja',
  },
  {
    icono: '📚',
    titulo: 'Educación inclusiva',
    descripcion:
      'Acompañamos a los niños en su proceso educativo, proporcionando materiales adaptados y apoyo escolar.',
    mod: 'verde',
  },
  {
    icono: '🍽️',
    titulo: 'Unidad de desnutrición infantil',
    descripcion:
      'Trabajamos para combatir la malnutrición mediante atención médica, alimentación y seguimiento del desarrollo infantil.',
    mod: 'naranja',
  },
  {
    icono: '👨‍👩‍👧',
    titulo: 'Apoyo a familias',
    descripcion:
      'Formamos y acompañamos a las familias en cuidados, nutrición y salud.',
    mod: 'verde',
  },
  {
    icono: '🤝',
    titulo: 'Sensibilización comunitaria',
    descripcion:
      'Promovemos la inclusión y luchamos contra el estigma asociado a la discapacidad.',
    mod: 'naranja',
  },
]

const impacto = [
  { icono: '❤️', numero: '+100', desc: 'Niños atendidos' },
  { icono: '➕', numero: '+90',  desc: 'Tratamientos médicos' },
  { icono: '⚕️', numero: '18',   desc: 'Operaciones realizadas' },
  { icono: '📚', numero: '65',   desc: 'Niños en talleres semanales' },
]

const historias = [
  {
    nombre: 'Rogers',
    subtitulo: 'Una segunda oportunidad de vida',
    texto:
      'Tras años de sufrimiento, Rogers fue operado con éxito gracias a la intervención de Mkono Amiga. Hoy lleva una vida normal, llena de posibilidades que antes parecían imposibles.',
    mod: 'naranja',
  },
  {
    nombre: 'Elizabeth',
    subtitulo: 'Superando lo imposible',
    texto:
      'Elizabeth superó un tumor cerebral gracias a la intervención médica gestionada por la asociación. Su recuperación es un testimonio del impacto que los recursos y el apoyo pueden tener.',
    mod: 'verde',
  },
  {
    nombre: 'Antony y Triphani',
    subtitulo: 'Autonomía y dignidad',
    texto:
      'Gracias a la fisioterapia continuada y a sus sillas de ruedas, Antony y Triphani han ganado autonomía y calidad de vida. Cada sesión es un paso más hacia su independencia.',
    mod: 'naranja',
  },
]

function Programas() {
  return (
    <div className="programas">

      {/* ── BANNER ── */}
      <section className="programas__banner banner-pagina">
        <div className="contenedor">
          <span className="etiqueta-seccion">Nuestro trabajo</span>
          <h1>Programas e Impacto</h1>
          <p>Seis líneas de acción para transformar vidas en Buhweju, Uganda.</p>
        </div>
      </section>

      {/* ── PROGRAMAS ── */}
      <section className="seccion programas__lista">
        <div className="contenedor">
          <div className="programas__grid">
            {programas.map((p, i) => (
              <article className={`programas__tarjeta programas__tarjeta--${p.mod}`} key={i}>
                <span className="programas__tarjeta-icono" aria-hidden="true">{p.icono}</span>
                <h3>{p.titulo}</h3>
                <p>{p.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── IMPACTO ── */}
      <section className="programas__impacto" aria-label="Cifras de impacto">
        <div className="contenedor">
          <span className="etiqueta-seccion programas__impacto-etiqueta">
            Resultados reales
          </span>
          <h2 className="programas__impacto-titulo">Nuestro impacto</h2>
          <p className="programas__impacto-subtitulo">
            Durante el último año hemos logrado resultados que cambian vidas.
          </p>
          <div className="programas__impacto-grid">
            {impacto.map((item, i) => (
              <div className="programas__impacto-item" key={i}>
                <span aria-hidden="true">{item.icono}</span>
                <strong>{item.numero}</strong>
                <span>{item.desc}</span>
              </div>
            ))}
          </div>
          <blockquote className="programas__impacto-cita">
            Más allá de los números: cada cifra representa una historia de superación,
            una familia apoyada y una oportunidad recuperada.
          </blockquote>
        </div>
      </section>

      {/* ── HISTORIAS ── */}
      <section className="seccion programas__historias">
        <div className="contenedor">
          <span className="etiqueta-seccion">Historias reales</span>
          <h2 className="titulo-seccion">Historias de superación</h2>
          <p className="subtitulo-seccion">
            Cada niño tiene una historia. Estas son solo algunas de las vidas
            que hemos acompañado.
          </p>

          <div className="programas__historias-grid">
            {historias.map((h, i) => (
              <article className={`programas__historia programas__historia--${h.mod}`} key={i}>
                {/* Reemplazar con: <img src={`/imagenes/${h.nombre.toLowerCase()}.jpg`} alt={h.nombre} /> */}
                <div
                  className="programas__historia-foto"
                  role="img"
                  aria-label={`Foto de ${h.nombre}`}
                />
                <div className="programas__historia-body">
                  <h3>{h.nombre}</h3>
                  <p className="programas__historia-subtitulo">{h.subtitulo}</p>
                  <p>{h.texto}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="programas__cta">
        <div className="contenedor programas__cta-inner">
          <h2>Ayúdanos a seguir</h2>
          <p>Con tu apoyo podemos llegar a más niños y ampliar nuestros programas.</p>
          <Link to="/contacto?tipo=donacion" className="btn btn--primario">
            Donar ahora
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Programas
