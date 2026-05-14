import PaginaLegal from '../../components/PaginaLegal/PaginaLegal'

function AvisoLegal() {
  return (
    <PaginaLegal
      title="Aviso Legal"
      description="Información legal e identificativa de la asociación Mkono Amiga, en cumplimiento de la Ley 34/2002 de Servicios de la Sociedad de la Información."
      path="/aviso-legal"
    >
      <span className="pagina-legal__actualizado">Última actualización: mayo de 2026</span>

      <p>
        En cumplimiento con el deber de información recogido en el artículo 10 de la Ley
        34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del
        Comercio Electrónico (LSSI-CE), se exponen a continuación los datos identificativos
        de la entidad titular de este sitio web.
      </p>

      <h2>1. Datos identificativos</h2>
      <p>
        <strong>Denominación social:</strong> Mkono Amiga<br />
        <strong>CIF:</strong> G21748462<br />
        <strong>Domicilio social:</strong> Calle Chucuri 12 4D, 28033 Madrid<br />
        <strong>Representante legal:</strong> Nerea Ponce Hernández<br />
        <strong>Correo electrónico:</strong> asociacion@mkonoamiga.org
      </p>

      <h2>2. Objeto y ámbito de aplicación</h2>
      <p>
        El presente aviso legal regula el uso del sitio web <strong>mkonoamiga.org</strong>,
        cuya finalidad es dar a conocer la actividad de la asociación y facilitar el
        contacto con ella. El acceso y uso de este sitio web implica la aceptación
        de las presentes condiciones.
      </p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos de este sitio web —textos, imágenes, logotipos, diseño gráfico y
        código fuente— son propiedad de Mkono Amiga o de terceros que han autorizado
        expresamente su uso. Todos los derechos están reservados.
      </p>
      <p>
        Queda expresamente prohibida la reproducción, distribución, comunicación pública
        o transformación de cualquier contenido sin la autorización previa y por escrito
        de Mkono Amiga, salvo que la ley lo permita expresamente.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        Mkono Amiga no garantiza la disponibilidad continua del sitio web ni se hace
        responsable de los daños que pudieran derivarse de su uso o de la imposibilidad
        de acceder a él.
      </p>
      <p>
        Este sitio puede contener enlaces a páginas web de terceros. Mkono Amiga no
        controla ni se responsabiliza del contenido de dichos sitios externos.
      </p>

      <h2>5. Legislación aplicable y jurisdicción</h2>
      <p>
        El presente aviso legal se rige por la legislación española vigente. Para la
        resolución de cualquier controversia derivada del acceso o uso de este sitio web,
        las partes se someten a los juzgados y tribunales competentes conforme a derecho.
      </p>
    </PaginaLegal>
  )
}

export default AvisoLegal
