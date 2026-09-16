import SEO from '../SEO/SEO'
import { seoDe } from '../../data/rutas'
import './PaginaLegal.scss'

// El título y la descripción salen de src/data/rutas.js
function PaginaLegal({ path, children }) {
  const seo = seoDe(path)

  return (
    <div className="pagina-legal">
      <SEO {...seo} />

      <section className="pagina-legal__banner">
        <div className="contenedor">
          <h1>{seo.title}</h1>
        </div>
      </section>

      <section className="seccion pagina-legal__contenido">
        <div className="contenedor pagina-legal__texto">
          {children}
        </div>
      </section>
    </div>
  )
}

export default PaginaLegal
