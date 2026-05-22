import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [scrolled, setScrolled]       = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuAbierto ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuAbierto])

  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const cerrar = () => setMenuAbierto(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}${isHome && !scrolled ? ' navbar--inicio' : ''}`}>
      <div className="contenedor navbar__contenedor">
        <Link to="/" className="navbar__logo" onClick={cerrar}>
          <img
            src="/img/LogoMknoAmiga.webp"
            alt="Mkono Amiga"
            className={`navbar__logo-img${isHome && !scrolled ? ' navbar__logo-img--blanco' : ''}`}
          />
        </Link>

        {/* Botón hamburguesa (móvil) */}
        <button
          className={`navbar__hamburguesa${menuAbierto ? ' activo' : ''}`}
          onClick={() => setMenuAbierto(v => !v)}
          aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuAbierto}
        >
          <span /><span /><span />
        </button>

        {/* Navegación principal */}
        <nav
          className={`navbar__nav${menuAbierto ? ' navbar__nav--abierto' : ''}`}
          aria-hidden={!menuAbierto && undefined}
        >
          <ul className="navbar__lista">
            <li><NavLink to="/"              end onClick={cerrar}>Inicio</NavLink></li>
            <li><NavLink to="/quienes-somos"     onClick={cerrar}>Quiénes somos</NavLink></li>
            <li><NavLink to="/programas"         onClick={cerrar}>Programas</NavLink></li>
            <li><NavLink to="/apoyanos"          onClick={cerrar}>Apóyanos</NavLink></li>
            <li><NavLink to="/contacto"          onClick={cerrar}>Contacto</NavLink></li>
            <li>
              <a
                href="https://mkonoamiga.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={cerrar}
              >
                Blog
              </a>
            </li>
          </ul>
  
        </nav>
      </div>
    </header>
  )
}

export default Navbar
