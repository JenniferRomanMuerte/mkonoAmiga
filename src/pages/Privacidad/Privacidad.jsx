import PaginaLegal from '../../components/PaginaLegal/PaginaLegal'

function Privacidad() {
  return (
    <PaginaLegal
      title="Política de Privacidad"
      description="Información sobre el tratamiento de datos personales por parte de Mkono Amiga, en cumplimiento del Reglamento General de Protección de Datos (RGPD)."
      path="/privacidad"
    >
      <span className="pagina-legal__actualizado">Última actualización: [RELLENAR: mes y año]</span>

      <p>
        En Mkono Amiga nos comprometemos a proteger tu privacidad y a tratar tus datos
        personales con total transparencia, en cumplimiento del Reglamento (UE) 2016/679
        General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 de Protección de
        Datos Personales y garantía de los derechos digitales (LOPDGDD).
      </p>

      <h2>1. Responsable del tratamiento</h2>
      <p>
        <strong>Entidad:</strong> [RELLENAR: nombre oficial de la asociación]<br />
        <strong>CIF:</strong> [RELLENAR: CIF]<br />
        <strong>Domicilio:</strong> [RELLENAR: dirección completa]<br />
        <strong>Correo de contacto:</strong> asociacion@mkonoamiga.org
      </p>

      <h2>2. Datos que recogemos y finalidad</h2>
      <p>
        Únicamente recogemos los datos que tú nos facilitas voluntariamente a través del
        formulario de contacto:
      </p>
      <ul>
        <li><strong>Nombre</strong> — para dirigirnos a ti de forma personalizada.</li>
        <li><strong>Correo electrónico</strong> — para responderte a tu consulta.</li>
        <li><strong>Asunto y mensaje</strong> — para gestionar tu solicitud.</li>
      </ul>
      <p>
        No recogemos datos de navegación, no utilizamos cookies de seguimiento propias
        ni herramientas de analítica web.
      </p>
      <p>
        Las donaciones realizadas a través de PayPal, Bizum o Teaming se procesan
        directamente en esas plataformas, que tienen sus propias políticas de privacidad.
        Mkono Amiga no accede ni almacena datos bancarios o de pago.
      </p>

      <h2>3. Base jurídica del tratamiento</h2>
      <p>
        El tratamiento de los datos del formulario de contacto se basa en el
        <strong> consentimiento</strong> que prestas al enviarnos tu mensaje, de acuerdo
        con el artículo 6.1.a del RGPD.
      </p>

      <h2>4. Conservación de los datos</h2>
      <p>
        Conservamos tus datos durante el tiempo necesario para atender tu solicitud y,
        como máximo, durante <strong>[RELLENAR: plazo, p. ej. 2 años]</strong> desde
        la última comunicación. Transcurrido ese plazo, los datos serán eliminados de
        forma segura.
      </p>

      <h2>5. Destinatarios</h2>
      <p>
        Tus datos no se ceden ni venden a terceros, salvo obligación legal. El envío del
        formulario de contacto utiliza el servicio <strong>Web3Forms</strong>, que actúa
        como encargado del tratamiento para la transmisión del mensaje. Puedes consultar
        su política de privacidad en su sitio web.
      </p>

      <h2>6. Tus derechos</h2>
      <p>
        Tienes derecho a:
      </p>
      <ul>
        <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos.</li>
        <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
        <li><strong>Supresión:</strong> solicitar que eliminemos tus datos.</li>
        <li><strong>Oposición:</strong> oponerte al tratamiento en determinadas circunstancias.</li>
        <li><strong>Limitación:</strong> solicitar que restrinjamos el tratamiento.</li>
        <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado.</li>
      </ul>
      <p>
        Para ejercer cualquiera de estos derechos, escríbenos a{' '}
        <a href="mailto:asociacion@mkonoamiga.org">asociacion@mkonoamiga.org</a>{' '}
        indicando el derecho que deseas ejercer y adjuntando una copia de tu documento
        de identidad.
      </p>

      <h2>7. Reclamaciones ante la AEPD</h2>
      <p>
        Si consideras que el tratamiento de tus datos no es adecuado, tienes derecho a
        presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD)
        a través de su sitio web:{' '}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">
          www.aepd.es
        </a>.
      </p>
    </PaginaLegal>
  )
}

export default Privacidad
