import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor footer__contenedor">

        {/* Marca */}
        <div className="footer__marca">
          <h3 className="footer__logo">Mkono Amiga</h3>
          <p className="footer__tagline">
            Potenciando habilidades, mejorando vidas y dando rienda suelta a los sueños.
          </p>
          <p className="footer__lugar">Buhweju, Uganda · Madrid, España</p>
        </div>

        {/* Contacto */}
        <div className="footer__columna">
          <h4 className="footer__titulo-col">Contacto</h4>
          <ul>
            <li>
              <a href="mailto:asociacion@mkonoamiga.org">
                asociacion@mkonoamiga.org
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/mkonoamiga"
                target="_blank"
                rel="noopener noreferrer"
              >
                @mkonoamiga
              </a>
            </li>
            <li>
              {/* Reemplaza URL_BLOG_AQUI con la URL real del blog */}
              <a href="URL_BLOG_AQUI" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="footer__cta">
          <p>Tu apoyo marca la diferencia.</p>
          <Link to="/contacto?tipo=donacion" className="btn btn--primario">
            Donar ahora
          </Link>
        </div>

      </div>

      <div className="footer__inferior">
        <div className="contenedor">
          <p>© {año} Mkono Amiga · Asociación sin ánimo de lucro</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
