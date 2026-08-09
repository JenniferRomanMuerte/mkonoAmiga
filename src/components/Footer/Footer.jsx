import { Link } from 'react-router-dom'
import './Footer.scss'

function Footer() {
  const año = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="contenedor footer__contenedor">

        {/* 1: Marca */}
        <div className="footer__marca">
          <div className="footer__marca-fila">
            <img src="/img/LogoMknoAmiga.webp" alt="Mkono Amiga" className="footer__logo" />
            <p className="footer__tagline">
              Potenciando habilidades, mejorando vidas y dando rienda suelta a los sueños.
            </p>
          </div>
          <p className="footer__lugar">Buhweju, Uganda · Madrid, España</p>
        </div>

        {/* 2: Contacto */}
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
              <a href="https://mkonoamiga.blogspot.com" target="_blank" rel="noopener noreferrer">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* 3: CTA */}
        <div className="footer__cta">
          <p>Tu apoyo marca la diferencia.</p>
          <Link to="/contacto?tipo=donacion" className="btn btn--primario">
            Donar ahora
          </Link>
        </div>

      </div>

      <div className="footer__inferior">
        <div className="contenedor footer__inferior-inner">
           <p>© {año} Mkono Amiga · Asociación sin ánimo de lucro</p>
          <nav className="footer__legal" aria-label="Enlaces legales">
            <Link to="/transparencia">Transparencia</Link>
            <Link to="/aviso-legal">Aviso Legal</Link>
            <Link to="/privacidad">Privacidad</Link>
            <Link to="/cookies">Cookies</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
