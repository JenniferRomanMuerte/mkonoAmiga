import { Link } from 'react-router-dom'
import './Inicio.scss'

const estadisticas = [
  { icono: '❤️', numero: '100', descripcion: 'Niños atendidos' },
  { icono: '🩺', numero: '90', descripcion: 'Tratamientos médicos' },
  { icono: '📖', numero: '65', descripcion: 'Niños en talleres semanales' },
]

const areas = [
  { titulo: 'Atención Médica', mod: 'verde' },
  { titulo: 'Educación Inclusiva', mod: 'naranja' },
  { titulo: 'Apoyo Familiar', mod: 'marron' },
]

function Inicio() {
  return (
    <div className="inicio">

      {/* ── HERO ── */}
      <section className="inicio__hero" aria-label="Portada">
        <div className="inicio__hero-contenido">
          <div className="inicio__hero-texto">
            <h1 className="inicio__hero-titulo">
              <span className="inicio__hero-titulo-mkono">Mkono</span>
              {' '}
              <span className="inicio__hero-titulo-amiga">Amiga</span>
            </h1>
            <p className="inicio__hero-subtitulo">
              Potenciando habilidades, mejorando vidas<br />
              y dando rienda suelta a los sueños.
            </p>
            <p className="inicio__hero-descripcion">
              Trabajamos en Uganda para mejorar la vida de niños y niñas con
              necesidades especiales, ofreciendo atención médica, educación
              inclusiva y apoyo a sus familias.
            </p>
          </div>
          <div className="inicio__hero-botones">
            <Link to="/contacto?tipo=donacion" className="btn btn--primario">
              Haz un donativo
            </Link>
            <Link to="/programas" className="btn btn--secundario">
              Nuestros proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* ── ESTADÍSTICAS ── */}
      <section className="inicio__impacto" aria-label="Impacto">
        <div className="contenedor inicio__impacto-grid">
          {estadisticas.map((s, i) => (
            <div className="inicio__impacto-item" key={i}>
              <div className="inicio__impacto-fila">
                <span className="inicio__impacto-icono" aria-hidden="true">{s.icono}</span>
                <span className="inicio__impacto-numero">{s.numero}</span>
              </div>
              <span className="inicio__impacto-desc">{s.descripcion}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── QUIÉNES SOMOS (preview) ── */}
      <section className="seccion inicio__quienes" aria-labelledby="qs-titulo">
        <div className="contenedor inicio__quienes-inner">
          <h2 id="qs-titulo" className="inicio__quienes-titulo">¿Quiénes somos?</h2>
          <p className="inicio__quienes-texto">
            Somos una ONG que trabaja para mejorar la{' '}
            <strong>vida de niños y niñas con discapacidad en Uganda.</strong>
          </p>

          <div className="inicio__areas">
            {areas.map((a, i) => (
              <div className={`inicio__area inicio__area--${a.mod}`} key={i}>
                <div className="inicio__area-img" role="img" aria-label={a.titulo} />
                <span className="inicio__area-etiqueta">{a.titulo}</span>
              </div>
            ))}
          </div>

          <Link to="/quienes-somos" className="btn btn--verde">
            Descubre más
          </Link>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="inicio__cta" aria-label="Llamada a la acción">
        <div className="contenedor inicio__cta-inner">
          <h2>Tu ayuda cambia vidas</h2>
          <p>
            Con tu aportación, estás ofreciendo salud, educación y esperanza
            a niños que lo necesitan.
          </p>
          <Link to="/contacto?tipo=donacion" className="btn btn--primario">
            Donar ahora
          </Link>
        </div>
      </section>

    </div>
  )
}

export default Inicio
