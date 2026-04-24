import { Link } from 'react-router-dom'
import './QuienesSomos.scss'

const valores = [
  { icono: '🤝', nombre: 'Inclusión' },
  { icono: '⭐', nombre: 'Dignidad' },
  { icono: '💪', nombre: 'Compromiso' },
  { icono: '🌱', nombre: 'Sostenibilidad' },
  { icono: '❤️', nombre: 'Cercanía' },
]

const equipo = [
  { rol: 'Fisioterapeutas',      desc: 'Rehabilitación y atención especializada' },
  { rol: 'Enfermeras',           desc: 'Cuidados médicos y seguimiento de salud' },
  { rol: 'Trabajadores sociales',desc: 'Apoyo y acompañamiento a las familias' },
  { rol: 'Docentes',             desc: 'Educación inclusiva y adaptada' },
  { rol: 'Voluntarios',          desc: 'Nacionales e internacionales comprometidos' },
]

function QuienesSomos() {
  return (
    <div className="qs">

      {/* ── BANNER ── */}
      <section className="qs__banner">
        <div className="qs__contenedor">
          <h1  className="qs__contenedor-titulo">¿Quiénes somos?</h1>
          <p className="qs__contenedor-texto">
            Mkono Amiga es una asociación sin ánimo de lucro que trabaja en el
            distrito de Buhweju, en Uganda, para mejorar la vida de niños y niñas
            con necesidades especiales.
          </p>
        </div>
      </section>

      {/* ── HISTORIA ── */}
      <section className="seccion qs__historia">
        <div className="contenedor qs__historia-grid">
          <div className="qs__historia-texto">
            <h2 className="titulo-seccion">Una asociación nacida del compromiso</h2>
            <p>
              Nacemos con el compromiso de ofrecer oportunidades donde apenas
              existen, acompañando a los menores, sus familias y la comunidad
              hacia una vida más digna e inclusiva.
            </p>
            <p>
              Trabajamos de la mano de los profesionales locales y la comunidad
              para crear un impacto real, humano y sostenible en el tiempo.
            </p>
          </div>
          <div className="qs__historia-img" role="img" aria-label="Foto del equipo de Mkono Amiga" />
        </div>
      </section>

      {/* ── MISIÓN Y VISIÓN ── */}
      <section className="seccion qs__mv">
        <div className="contenedor qs__mv-grid">
          <div className="qs__mv-tarjeta qs__mv-tarjeta--mision">
            <div className="qs__mv-cabecera">
              <span className="qs__mv-icono" aria-hidden="true">🎯</span>
              <h3>Nuestra misión</h3>
            </div>
            <p>
              Mejorar la calidad de vida de niños y niñas con discapacidad mediante
              atención integral, educación inclusiva y apoyo a sus familias.
            </p>
          </div>
          <div className="qs__mv-tarjeta qs__mv-tarjeta--vision">
            <div className="qs__mv-cabecera">
              <span className="qs__mv-icono" aria-hidden="true">🌍</span>
              <h3>Nuestra visión</h3>
            </div>
            <p>
              Un mundo en el que todos los niños, independientemente de su
              condición, tengan acceso a salud, educación y oportunidades.
            </p>
          </div>
        </div>
      </section>

      {/* ── VALORES ── */}
      <section className="seccion qs__valores">
        <div className="contenedor">
          <div className="qs__valores-cabecera">
            <h2 className="titulo-seccion">Nuestros valores</h2>
          </div>
          <div className="qs__valores-grid">
            {valores.map((v, i) => (
              <div className="qs__valor" key={i}>
                <span className="qs__valor-icono" aria-hidden="true">{v.icono}</span>
                <span className="qs__valor-nombre">{v.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section className="seccion qs__equipo">
        <div className="contenedor">
          <h2 className="titulo-seccion">Nuestro equipo</h2>
          <p className="subtitulo-seccion">
            Nuestro trabajo es posible gracias a un equipo local comprometido
            formado por profesionales y voluntarios nacionales e internacionales.
          </p>
          <div className="qs__equipo-grid">
            {equipo.map((m, i) => (
              <div className="qs__rol" key={i}>
                <h4>{m.rol}</h4>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DÓNDE TRABAJAMOS ── */}
      <section className="qs__donde">
        <div className="contenedor qs__donde-grid">
          <div className="qs__donde-texto">
            <span className="etiqueta-seccion">Dónde trabajamos</span>
            <h2>Uganda y Buhweju</h2>

            <div className="qs__donde-bloque">
              <h4>La realidad</h4>
              <p>
                Trabajamos en el distrito de Buhweju, una zona rural del oeste
                de Uganda donde gran parte de la población vive en situación
                de pobreza.
              </p>
              <p>
                Muchas familias no tienen acceso a servicios básicos como
                atención médica o educación de calidad. Los niños y niñas con
                discapacidad son especialmente vulnerables, enfrentándose a
                barreras sociales, económicas y culturales.
              </p>
            </div>

            <div className="qs__donde-bloque">
              <h4>Por qué actuamos</h4>
              <p>
                Mkono Amiga surge para reducir esta desigualdad, creando
                espacios seguros donde los niños puedan recibir atención,
                educación y apoyo continuo.
              </p>
            </div>
          </div>

          <div className="qs__mapa">
            <iframe
              title="Buhweju, Uganda"
              src="https://maps.google.com/maps?q=Buhweju,Uganda&t=&z=10&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="qs__cta">
        <div className="contenedor qs__cta-inner">
          <h2>¿Quieres conocer más?</h2>
          <p>Descubre todos nuestros programas y el impacto que estamos generando.</p>
          <div className="qs__cta-botones">
            <Link to="/programas" className="btn btn--primario">Ver programas</Link>
            <Link to="/apoyanos"  className="btn btn--secundario">Apóyanos</Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default QuienesSomos
