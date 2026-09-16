import { useState, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ASUNTOS } from '../../data/contactoData'
import { validarContacto, LIMITES } from '../../utils/validarContacto'
import PanelDonacion from '../../components/PanelDonacion/PanelDonacion'
import SEO from '../../components/SEO/SEO'
import { seoDe } from '../../data/rutas'
import './Contacto.scss'

const FORM_VACIO = {
  nombre:         '',
  email:          '',
  asunto:         '',
  mensaje:        '',
  consentimiento: false,
  botcheck:       false,
}

function Contacto() {
  const [searchParams] = useSearchParams()
  const esDonacion = searchParams.get('tipo') === 'donacion'

  const [form,     setForm]     = useState(FORM_VACIO)
  const [errores,  setErrores]  = useState({})
  const [enviando, setEnviando] = useState(false)
  const [enviado,  setEnviado]  = useState(false)
  const [error,    setError]    = useState('')
  const formRef = useRef(null)

  useEffect(() => {
    const tipo = searchParams.get('tipo')
    const preset = ASUNTOS[tipo]
    if (preset) {
      // Rellena asunto y mensaje según el enlace desde el que se llega (?tipo=...).
      // Funciona bien; reescribirlo sin efecto no aporta nada ahora mismo.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setForm(prev => ({
        ...prev,
        asunto:  preset.asunto,
        mensaje: preset.mensaje || prev.mensaje,
      }))
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    // Al corregir un campo, retiramos su mensaje de error
    if (errores[name]) {
      setErrores(prev => {
        const { [name]: _, ...resto } = prev
        return resto
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nuevosErrores = validarContacto(form)
    setErrores(nuevosErrores)
    const primerCampoConError = Object.keys(nuevosErrores)[0]
    if (primerCampoConError) {
      formRef.current?.elements[primerCampoConError]?.focus()
      return
    }

    setEnviando(true)
    setError('')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name:    form.nombre.trim(),
          email:   form.email.trim(),
          subject: form.asunto.trim(),
          message: form.mensaje.trim(),
          // Campo trampa: solo lo marcan los bots, y Web3Forms descarta esos envíos
          ...(form.botcheck && { botcheck: true }),
        }),
      })

      const data = await res.json()

      if (data.success) {
        setEnviado(true)
        setForm(FORM_VACIO)
      } else {
        setError('Ha ocurrido un error al enviar el mensaje. Por favor, inténtalo de nuevo.')
      }
    } catch {
      setError('Error de conexión. Por favor, comprueba tu red e inténtalo de nuevo.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="contacto">

      <SEO
        {...seoDe('/contacto')}
        {...(esDonacion && {
          title: 'Donaciones económicas',
          description: 'Realiza tu donación a Mkono Amiga por transferencia, Bizum, Teaming o PayPal. Los donativos desgravan hasta un 80%.',
        })}
      />

      {/* ── BANNER ── */}
      <section className="contacto__banner">
        <div className="contenedor contacto__banner-inner">
          <h1>{esDonacion ? 'Donaciones económicas' : 'Contacto'}</h1>
          <p>
            {esDonacion
              ? 'Los donativos desgravan hasta un 80%'
              : '¿Quieres donar, ser voluntario o saber más? Estamos aquí.'}
          </p>
        </div>
      </section>

      {/* ── CONTENIDO PRINCIPAL ── */}
      <section className="seccion contacto__seccion">
        <div className="contenedor contacto__grid">

          {/* Izquierda: panel donación o formulario */}
          {esDonacion ? (
            <PanelDonacion />
          ) : (
            <div className="contacto__formulario-wrapper">
              {enviado ? (
                <div className="contacto__exito">
                  <span className="contacto__exito-icono" aria-hidden="true">✅</span>
                  <h3>¡Mensaje enviado!</h3>
                  <p>
                    Gracias por ponerte en contacto con nosotros. Te responderemos
                    lo antes posible.
                  </p>
                  <button
                    className="btn btn--contorno"
                    onClick={() => setEnviado(false)}
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  className="contacto__form"
                  onSubmit={handleSubmit}
                >
                  <h2 className="contacto__form-titulo">Escríbenos</h2>

                  <div className="contacto__campo">
                    <label htmlFor="nombre">Nombre</label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={form.nombre}
                      onChange={handleChange}
                      placeholder="Tu nombre completo"
                      required
                      minLength={LIMITES.nombre.min}
                      maxLength={LIMITES.nombre.max}
                      autoComplete="name"
                      aria-invalid={!!errores.nombre}
                      aria-describedby={errores.nombre ? 'nombre-error' : undefined}
                    />
                    {errores.nombre && (
                      <p id="nombre-error" className="contacto__campo-error">{errores.nombre}</p>
                    )}
                  </div>

                  <div className="contacto__campo">
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="tu@email.com"
                      required
                      autoComplete="email"
                      aria-invalid={!!errores.email}
                      aria-describedby={errores.email ? 'email-error' : undefined}
                    />
                    {errores.email && (
                      <p id="email-error" className="contacto__campo-error">{errores.email}</p>
                    )}
                  </div>

                  <div className="contacto__campo">
                    <label htmlFor="asunto">Asunto</label>
                    <input
                      type="text"
                      id="asunto"
                      name="asunto"
                      value={form.asunto}
                      onChange={handleChange}
                      placeholder="¿En qué podemos ayudarte?"
                      required
                      minLength={LIMITES.asunto.min}
                      maxLength={LIMITES.asunto.max}
                      aria-invalid={!!errores.asunto}
                      aria-describedby={errores.asunto ? 'asunto-error' : undefined}
                    />
                    {errores.asunto && (
                      <p id="asunto-error" className="contacto__campo-error">{errores.asunto}</p>
                    )}
                  </div>

                  <div className="contacto__campo">
                    <label htmlFor="mensaje">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={form.mensaje}
                      onChange={handleChange}
                      placeholder="Escribe tu mensaje aquí..."
                      rows={6}
                      required
                      minLength={LIMITES.mensaje.min}
                      maxLength={LIMITES.mensaje.max}
                      aria-invalid={!!errores.mensaje}
                      aria-describedby={errores.mensaje ? 'mensaje-error' : undefined}
                    />
                    {errores.mensaje && (
                      <p id="mensaje-error" className="contacto__campo-error">{errores.mensaje}</p>
                    )}
                  </div>

                  {/* Campo trampa para bots (Web3Forms): invisible para las personas */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    checked={form.botcheck}
                    onChange={handleChange}
                    className="contacto__botcheck"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {/* Información básica sobre protección de datos (primera capa) */}
                  <div className="contacto__rgpd" id="rgpd-info">
                    <p className="contacto__rgpd-titulo">Información básica sobre protección de datos</p>
                    <ul>
                      <li><strong>Responsable:</strong> Mkono Amiga.</li>
                      <li><strong>Finalidad:</strong> responder a tu consulta o solicitud.</li>
                      <li><strong>Legitimación:</strong> tu consentimiento (art. 6.1.a RGPD).</li>
                      <li>
                        <strong>Destinatarios:</strong> no cedemos tus datos a terceros, salvo
                        obligación legal. El envío se hace a través de Web3Forms, como encargado
                        del tratamiento.
                      </li>
                      <li>
                        <strong>Derechos:</strong> acceso, rectificación, supresión y otros, en{' '}
                        <a href="mailto:asociacion@mkonoamiga.org">asociacion@mkonoamiga.org</a>.
                      </li>
                    </ul>
                  </div>

                  <div className="contacto__consentimiento">
                    <input
                      type="checkbox"
                      id="consentimiento"
                      name="consentimiento"
                      checked={form.consentimiento}
                      onChange={handleChange}
                      required
                      aria-invalid={!!errores.consentimiento}
                      aria-describedby={errores.consentimiento ? 'consentimiento-error' : undefined}
                    />
                    <label htmlFor="consentimiento">
                      He leído y acepto la{' '}
                      <a href="/privacidad" target="_blank" rel="noopener noreferrer">
                        política de privacidad
                      </a>
                    </label>
                  </div>
                  {errores.consentimiento && (
                    <p id="consentimiento-error" className="contacto__campo-error">
                      {errores.consentimiento}
                    </p>
                  )}

                  {error && (
                    <p className="contacto__error" role="alert">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="btn btn--primario btn--submit contacto__submit"
                    disabled={enviando}
                  >
                    {enviando ? 'Enviando…' : 'Enviar mensaje'}
                  </button>
                </form>
              )}
            </div>
          )}

          {/* Información de contacto */}
          <aside className="contacto__info">
            <h2 className="contacto__info-titulo">Información de contacto</h2>

            <div className="contacto__info-item">
              <span aria-hidden="true">✉️</span>
              <div>
                <strong>Email</strong>
                <a href="mailto:asociacion@mkonoamiga.org">
                  asociacion@mkonoamiga.org
                </a>
              </div>
            </div>

            <div className="contacto__info-item">
              <span aria-hidden="true">📸</span>
              <div>
                <strong>Instagram</strong>
                <a
                  href="https://instagram.com/mkonoamiga"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @mkonoamiga
                </a>
              </div>
            </div>

            <div className="contacto__info-item">
              <span aria-hidden="true">📍</span>
              <div>
                <strong>Dirección</strong>
                <span>Madrid, España</span>
              </div>
            </div>

            <div className="contacto__info-item">
              <span aria-hidden="true">📝</span>
              <div>
                <strong>Blog</strong>
                <a href="https://mkonoamiga.blogspot.com" target="_blank" rel="noopener noreferrer">
                  mkonoamiga.blogspot.com
                </a>
              </div>
            </div>

            <div className="contacto__nota">
              <p>
                ¿Quieres hacer una donación? Usa el formulario e indícanoslo,
                te daremos todas las instrucciones para hacerlo de forma
                rápida y segura.
              </p>
            </div>
          </aside>

        </div>
      </section>

    </div>
  )
}

export default Contacto
