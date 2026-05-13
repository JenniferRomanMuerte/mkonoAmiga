import SEO from '../SEO/SEO'
import './PaginaLegal.scss'

function PaginaLegal({ title, description, path, children }) {
  return (
    <div className="pagina-legal">
      <SEO title={title} description={description} path={path} />

      <section className="pagina-legal__banner">
        <div className="contenedor">
          <h1>{title}</h1>
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
