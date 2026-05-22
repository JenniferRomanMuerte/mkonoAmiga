import { Link } from 'react-router-dom'
import { estadisticas, areas } from '../../data/inicioData'
import CTADonacion from '../../components/CTADonacion/CTADonacion'
import SEO from '../../components/SEO/SEO'
import './Inicio.scss'

function Inicio() {
  return (
    <div className="inicio">

      <SEO
        title="ONG en Uganda — Ayuda a niños con discapacidad"
        description="ONG española que trabaja en Uganda para mejorar la vida de niños y niñas con necesidades especiales mediante atención médica, educación y apoyo familiar."
        path="/"
      />

      {/* ── HERO ── */}
      <section className="inicio__hero" aria-label="Portada">
        <div className="inicio__hero-inner">
        <div className="inicio__hero-izquierda">
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
          <div className="inicio__hero-botones">
            <Link to="/contacto?tipo=donacion" className="btn btn--primario">
              Haz un donativo
            </Link>
            <Link to="/programas" className="btn btn--secundario">
              Nuestros proyectos
            </Link>
          </div>
        </div>
        <div className="inicio__hero-derecha" aria-hidden="true">
          <img src="/img/imgHero.webp" alt="" />
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
            Somos una asociación que trabaja para mejorar la{' '}
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
      <CTADonacion
        heading="Tu ayuda cambia vidas"
        description="Con tu aportación, estás ofreciendo salud, educación y esperanza a niños que lo necesitan."
      />

    </div>
  )
}

export default Inicio
