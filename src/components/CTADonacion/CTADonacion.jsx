import { Link } from 'react-router-dom'
import './CTADonacion.scss'

function CTADonacion({ heading, description, className = '' }) {
  return (
    <section className={`cta-donacion${className ? ` ${className}` : ''}`}>
      <div className="contenedor cta-donacion__inner">
        <h2>{heading}</h2>
        {description && <p>{description}</p>}
        <Link to="/contacto?tipo=donacion" className="btn btn--primario">
          Donar ahora
        </Link>
      </div>
    </section>
  )
}

export default CTADonacion
