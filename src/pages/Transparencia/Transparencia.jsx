import { documentos } from '../../data/transparenciaData'
import SEO from '../../components/SEO/SEO'
import './Transparencia.scss'

function Transparencia() {
  return (
    <div className="transparencia">

      <SEO
        title="Transparencia y buen gobierno"
        description="Consulta y descarga los documentos de transparencia de Mkono Amiga: código ético, política de protección infantil, igualdad de género, antifraude, voluntariado y canal de denuncias."
        path="/transparencia"
      />

      {/* ── BANNER ── */}
      <section className="transparencia__banner">
        <div className="contenedor transparencia__banner-grid">
          <div className="transparencia__banner-texto">
            <h1>Transparencia</h1>
            <p>
              Rendir cuentas es parte de nuestro trabajo. Aquí puedes consultar y
              descargar los documentos que rigen cómo trabajamos.
            </p>
          </div>

          <img
            src="/img/transparencia.webp"
            alt="Niños y niñas del proyecto de Mkono Amiga en Buhweju"
            className="transparencia__banner-img"
          />
        </div>
      </section>

      {/* ── INTRODUCCIÓN ── */}
      <section className="seccion transparencia__intro">
        <div className="contenedor">
          <h2 className="titulo-seccion transparencia__intro-titulo">
            Nuestro compromiso
          </h2>

          <div className="transparencia__intro-grid">
            <img
              src="/img/compromiso.webp"
              alt="Equipo de Mkono Amiga acompañando a los niños en Buhweju"
              className="transparencia__intro-img"
              loading="lazy"
            />

            <div className="transparencia__intro-texto">
              <p>
                En Mkono Amiga gestionamos recursos que nos confían personas, familias
                y entidades que creen en este proyecto. Por eso trabajamos con políticas
                escritas, públicas y de obligado cumplimiento para todo el equipo y el
                voluntariado.
              </p>
              <p>
                Estos documentos definen cómo protegemos a la infancia, cómo prevenimos
                el fraude, cómo promovemos la igualdad y qué hacer si algo no se está
                haciendo bien. Están abiertos a cualquiera que quiera revisarlos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOCUMENTOS ── */}
      <section className="seccion transparencia__documentos">
        <div className="contenedor">
          <h2 className="titulo-seccion">Documentos</h2>

          <div className="transparencia__grid">
            {documentos.map((doc) => (
              <article
                className={`transparencia__tarjeta transparencia__tarjeta--${doc.mod}`}
                key={doc.archivo}
              >
                <span className="transparencia__tarjeta-icono" aria-hidden="true">
                  {doc.icono}
                </span>
                <span className="transparencia__tarjeta-formato">PDF</span>

                <h3>{doc.titulo}</h3>
                <p>{doc.descripcion}</p>

                <a
                  className="btn btn--primario transparencia__tarjeta-btn"
                  href={doc.archivo}
                  download
                  aria-label={`Descargar ${doc.titulo} en PDF`}
                >
                  Descargar PDF
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATOS DE LA ENTIDAD ── */}
      <section className="seccion transparencia__entidad">
        <div className="contenedor transparencia__entidad-inner">
          <h2>Datos de la entidad</h2>
          <p>
            <strong>Denominación:</strong> Mkono Amiga<br />
            <strong>CIF:</strong> G21748462<br />
            <strong>Domicilio:</strong> Calle Chucuri 12 4D, 28033 Madrid<br />
            <strong>Naturaleza:</strong> Asociación sin ánimo de lucro
          </p>
          <p className="transparencia__entidad-nota">
            ¿Echas en falta algún documento o quieres ampliar información? Escríbenos a{' '}
            <a href="mailto:asociacion@mkonoamiga.org">asociacion@mkonoamiga.org</a>{' '}
            y te respondemos.
          </p>
        </div>
      </section>

    </div>
  )
}

export default Transparencia
