import PaginaLegal from '../../components/PaginaLegal/PaginaLegal'

function Cookies() {
  return (
    <PaginaLegal path="/cookies">
      <span className="pagina-legal__actualizado">Última actualización: septiembre de 2026</span>

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
        La página <strong>Quiénes somos</strong> incluye un mapa interactivo proporcionado
        por <strong>Google Maps</strong>. Si lo cargas, Google puede instalar en tu
        dispositivo cookies de terceros y recoger datos como tu dirección IP. No son cookies
        necesarias para el funcionamiento de este sitio, y Mkono Amiga no controla estas
        cookies ni tiene acceso a los datos que Google recoja a través de ellas.
      </p>
      <p>
        Por eso <strong>el mapa no se carga automáticamente</strong>: en su lugar se muestra
        un aviso, y solo se carga si pulsas <em>«Aceptar y ver mapa»</em>. Si no lo aceptas,
        no se instala ninguna cookie de Google. Tu aceptación vale solo para esa visita: al
        recargar o volver a la página, el mapa vuelve a quedar bloqueado hasta que lo aceptes
        de nuevo.
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
        Puedes retirar tu consentimiento en cualquier momento eliminando las cookies de
        Google desde tu navegador. También puedes configurarlo para aceptar, rechazar o
        eliminar cookies; si bloqueas las de terceros, es posible que el mapa de la página
        Quiénes somos no funcione. Instrucciones para los navegadores más habituales:
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
