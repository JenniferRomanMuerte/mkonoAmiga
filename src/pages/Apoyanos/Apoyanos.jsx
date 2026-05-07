import { Link } from 'react-router-dom'
import { fondos, formas } from '../../data/apoyanosData'
import './Apoyanos.scss'

function Apoyanos() {
  return (
    <div className="apoyanos">

      {/* ── BANNER ── */}
      <section className="apoyanos__banner">
        <div className="contenedor apoyanos__banner-inner">
          <div className="apoyanos__banner-texto">
            <h1>Apóyanos</h1>
            <p>Tu apoyo es fundamental para seguir cambiando vidas en Uganda.</p>
            <Link to="/contacto?tipo=donacion" className="btn btn--primario">Donar ahora</Link>
          </div>
          <div className="apoyanos__banner-logo" aria-hidden="true">
            <img src="/img/LogoMknoAmiga.webp" alt="" />
          </div>
        </div>
      </section>

      {/* ── ONDA DIVISORIA ── */}
      <div className="apoyanos__onda" aria-hidden="true">
        <svg viewBox="0 0 1440 20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 L1440,0 L1440,8 C1300,16 1100,6 900,14 C700,20 500,8 300,16 C150,20 50,10 0,14 Z" fill="#F5EDD8" />
        </svg>
      </div>

      {/* ── FORMAS DE COLABORAR ── */}
      <section className="seccion apoyanos__colabora">
        <div className="contenedor">
          <div className="apoyanos__colabora-cabecera">
            <h2 className="titulo-seccion">Formas de colaborar</h2>
            <p className="subtitulo-seccion">
              Hay muchas maneras de sumarte a nuestra causa. Elige la que
              mejor se adapte a ti.
            </p>
          </div>

          <div className="apoyanos__colabora-grid">
            {formas.map((f, i) => (
              <article className="apoyanos__colabora-tarjeta" key={i}>
                <div className="apoyanos__colabora-tarjeta-header">
                  <span className="apoyanos__colabora-icono" aria-hidden="true">{f.icono}</span>
                  <h3>{f.titulo}</h3>
                </div>
                <p>{f.descripcion}</p>
                {f.href.startsWith('http') ? (
                  <a href={f.href} target="_blank" rel="noopener noreferrer" className={`btn btn--${f.mod}`}>
                    {f.cta}
                  </a>
                ) : (
                  <Link to={f.href} className={`btn btn--${f.mod}`}>
                    {f.cta}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CIFRAS ── */}
      <section className="apoyanos__cifras-seccion">
        <div className="contenedor apoyanos__cifras-inner">
          <div className="apoyanos__cifra">
            <strong className="apoyanos__cifra-numero">+200</strong>
            <span className="apoyanos__cifra-label">niños atendidos</span>
          </div>
          <div className="apoyanos__cifra-sep" aria-hidden="true" />
          <div className="apoyanos__cifra">
            <strong className="apoyanos__cifra-numero">4.000€</strong>
            <span className="apoyanos__cifra-label">coste mensual del proyecto</span>
          </div>
          <div className="apoyanos__cifra-sep" aria-hidden="true" />
          <div className="apoyanos__cifra">
            <strong className="apoyanos__cifra-numero">6</strong>
            <span className="apoyanos__cifra-label">programas activos</span>
          </div>
        </div>
      </section>

      {/* ── TRANSPARENCIA ── */}
      <section className="seccion apoyanos__transparencia">
        <div className="contenedor apoyanos__transparencia-grid">
          <div className="apoyanos__transparencia-texto">
            <h2 className="titulo-seccion">Cómo usamos los fondos</h2>
            <p>
              El coste mensual del proyecto es de aproximadamente{' '}
              <strong>4.000 €</strong>. Trabajamos con transparencia y
              eficiencia para maximizar el impacto de cada donación.
            </p>
            <p>
              Cada euro donado se destina directamente a mejorar la vida
              de los niños y sus familias en Buhweju.
            </p>
          </div>

          <div className="apoyanos__fondos">
            {fondos.map((f, i) => (
              <div className="apoyanos__fondo" key={i}>
                <div className="apoyanos__fondo-info">
                  <span className="apoyanos__fondo-icono" aria-hidden="true">{f.icono}</span>
                  <span className="apoyanos__fondo-concepto">{f.concepto}</span>
                  <span className="apoyanos__fondo-pct">{f.pct}%</span>
                </div>
                <div className="apoyanos__fondo-barra" role="presentation">
                  <div
                    className="apoyanos__fondo-relleno"
                    style={{ width: `${f.pct}%` }}
                    role="progressbar"
                    aria-valuenow={f.pct}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-label={`${f.concepto}: ${f.pct}%`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUÉ CONSIGUES ── */}
      <section className="apoyanos__consigues">
        <div className="contenedor apoyanos__consigues-inner">
          <div className="apoyanos__consigues-texto">

            <h2>Qué consigues con tu ayuda</h2>
            <p>
              Con tu aportación, estás ofreciendo salud, educación y esperanza
              a niños que lo necesitan. Cada donación, por pequeña que sea,
              marca la diferencia en la vida de un niño en Buhweju.
            </p>
          </div>
          <div className="apoyanos__consigues-cta">
            <p>¿A qué esperas?</p>
            <Link to="/contacto?tipo=donacion" className="btn btn--primario">
              Donar ahora
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Apoyanos
