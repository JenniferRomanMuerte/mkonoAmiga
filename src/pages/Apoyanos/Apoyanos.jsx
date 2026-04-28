import { Link } from 'react-router-dom'
import './Apoyanos.scss'

const fondos = [
  { icono: '🏥', concepto: 'Atención médica y tratamientos', pct: 35 },
  { icono: '🍽️', concepto: 'Alimentación y desnutrición',    pct: 25 },
  { icono: '🚗', concepto: 'Transporte y logística',          pct: 15 },
  { icono: '👩‍⚕️', concepto: 'Sueldos del equipo local',      pct: 20 },
  { icono: '📚', concepto: 'Material educativo',              pct: 5  },
]

const formas = [
  {
    icono: '💰',
    titulo: 'Donaciones económicas',
    descripcion:
      'Tu aportación económica, sea cual sea el importe, tiene un impacto directo en la vida de los niños.',
    cta: 'Hacer una donación',
    href: '/contacto?tipo=donacion',
    mod: 'primario',
  },
  {
    icono: '✈️',
    titulo: 'Voluntariado',
    descripcion:
      'Si quieres vivir una experiencia transformadora y contribuir con tu tiempo y conocimientos, contáctanos.',
    cta: 'Apuntarme como voluntario',
    href: '/contacto',
    mod: 'verde',
  },
  {
    icono: '🏢',
    titulo: 'Colaboraciones con empresas',
    descripcion:
      'Si representas a una empresa y quieres incorporar responsabilidad social a tu proyecto, podemos colaborar.',
    cta: 'Hablar con nosotros',
    href: '/contacto',
    mod: 'contorno',
  },
]

function Apoyanos() {
  return (
    <div className="apoyanos">

      {/* ── BANNER ── */}
      <section className="apoyanos__banner">
        <div className="contenedor apoyanos__banner-inner">
          <h1>Apóyanos</h1>
          <p>Tu apoyo es fundamental para seguir cambiando vidas en Uganda.</p>
          <div className="apoyanos__banner-cifras">
            <div className="apoyanos__cifra">
              <strong className="apoyanos__cifra-numero">+100</strong>
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
              <div className="apoyanos__colabora-tarjeta" key={i}>
                <span className="apoyanos__colabora-icono" aria-hidden="true">{f.icono}</span>
                <h3>{f.titulo}</h3>
                <p>{f.descripcion}</p>
                <Link to={f.href} className={`btn btn--${f.mod}`}>
                  {f.cta}
                </Link>
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
