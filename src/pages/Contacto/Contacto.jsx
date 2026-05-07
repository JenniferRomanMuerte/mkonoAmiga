import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ASUNTOS } from '../../data/contactoData'
import PanelDonacion from '../../components/PanelDonacion/PanelDonacion'
import SEO from '../../components/SEO/SEO'
import './Contacto.scss'

function Contacto() {
  const [searchParams] = useSearchParams()
  const esDonacion = searchParams.get('tipo') === 'donacion'

  const [form, setForm] = useState({
    nombre:  '',
    email:   '',
    asunto:  '',
    mensaje: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [enviado,  setEnviado]  = useState(false)
  const [error,    setError]    = useState('')

  useEffect(() => {
    const tipo = searchParams.get('tipo')
    const preset = ASUNTOS[tipo]
    if (preset) {
      setForm(prev => ({
        ...prev,
        asunto:  preset.asunto,
        mensaje: preset.mensaje || prev.mensaje,
      }))
    }
  }, [searchParams])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
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
          name:    form.nombre,
          email:   form.email,
          subject: form.asunto,
          message: form.mensaje,
        }),
      })

      const data = await res.json()

      if (data.success) {
        setEnviado(true)
        setForm({ nombre: '', email: '', asunto: '', mensaje: '' })
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
        title={esDonacion ? 'Donaciones económicas' : 'Contacto'}
        description={esDonacion
          ? 'Realiza tu donación a Mkono Amiga por transferencia, Bizum, Teaming o PayPal. Los donativos desgravan hasta un 80%.'
          : 'Contacta con Mkono Amiga para donar, ser voluntario, hacerte socio o colaborar con nuestra ONG en Uganda.'
        }
        path="/contacto"
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
                  className="contacto__form"
                  onSubmit={handleSubmit}
                  noValidate
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
                      autoComplete="name"
                    />
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
                    />
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
                    />
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
                    />
                  </div>

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
