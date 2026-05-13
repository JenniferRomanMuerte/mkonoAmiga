import PaginaLegal from '../../components/PaginaLegal/PaginaLegal'

function Cookies() {
  return (
    <PaginaLegal
      title="Política de Cookies"
      description="Información sobre el uso de cookies en el sitio web de Mkono Amiga y cómo gestionarlas desde tu navegador."
      path="/cookies"
    >
      <span className="pagina-legal__actualizado">Última actualización: [RELLENAR: mes y año]</span>

      <p>
        En cumplimiento con la normativa europea sobre privacidad y cookies (Directiva
        2009/136/CE y RGPD), te informamos sobre el uso de cookies en este sitio web.
      </p>

      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo
        cuando visitas un sitio web. Pueden ser propias (instaladas por este sitio) o
        de terceros (instaladas por servicios externos que este sitio utiliza).
      </p>

      <h2>2. Cookies propias</h2>
      <p>
        Este sitio web <strong>no instala cookies propias</strong> de seguimiento,
        analítica ni publicidad. No utilizamos Google Analytics ni ninguna otra
        herramienta de medición de audiencia.
      </p>

      <h2>3. Cookies de terceros</h2>
      <p>
        Este sitio incluye un mapa interactivo proporcionado por <strong>Google Maps</strong>.
        Al cargar la página de contacto, Google puede instalar cookies técnicas necesarias
        para el funcionamiento del mapa. Mkono Amiga no controla estas cookies ni tiene
        acceso a los datos que Google pueda recoger a través de ellas.
      </p>
      <p>
        Puedes consultar la política de cookies de Google en:{' '}
        <a
          href="https://policies.google.com/technologies/cookies"
          target="_blank"
          rel="noopener noreferrer"
        >
          policies.google.com/technologies/cookies
        </a>
      </p>

      <h2>4. Cómo gestionar las cookies</h2>
      <p>
        Puedes configurar tu navegador para aceptar, rechazar o eliminar las cookies.
        Ten en cuenta que desactivarlas puede afectar al funcionamiento del mapa en la
        página de contacto. Instrucciones para los navegadores más habituales:
      </p>
      <ul>
        <li>
          <strong>Google Chrome:</strong>{' '}
          Configuración → Privacidad y seguridad → Cookies y otros datos de sitios
        </li>
        <li>
          <strong>Mozilla Firefox:</strong>{' '}
          Preferencias → Privacidad y seguridad → Cookies y datos del sitio
        </li>
        <li>
          <strong>Safari:</strong>{' '}
          Preferencias → Privacidad → Gestionar datos de sitios web
        </li>
        <li>
          <strong>Microsoft Edge:</strong>{' '}
          Configuración → Privacidad, búsqueda y servicios → Cookies
        </li>
      </ul>

      <h2>5. Más información</h2>
      <p>
        Si tienes cualquier duda sobre nuestra política de cookies, puedes contactarnos
        en{' '}
        <a href="mailto:asociacion@mkonoamiga.org">asociacion@mkonoamiga.org</a>.
      </p>
    </PaginaLegal>
  )
}

export default Cookies
