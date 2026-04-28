import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import './Contacto.scss'

// Mensaje que se autocompleta cuando se llega desde un botón "Donar"
const MSG_DONACION =
  'Hola, me gustaría hacer una donación a Mkono Amiga. ¿Podéis indicarme cómo proceder?'

function Contacto() {
  const [searchParams] = useSearchParams()

  const [form, setForm] = useState({
    nombre:  '',
    email:   '',
    asunto:  '',
    mensaje: '',
  })
  const [enviando, setEnviando] = useState(false)
  const [enviado,  setEnviado]  = useState(false)
  const [error,    setError]    = useState('')

  // Rellena el formulario automáticamente cuando ?tipo=donacion
  useEffect(() => {
    if (searchParams.get('tipo') === 'donacion') {
      setForm(prev => ({
        ...prev,
        asunto:  'Donación',
        mensaje: MSG_DONACION,
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
      // Reemplaza TU_ACCESS_KEY_AQUI con tu clave de web3forms.com
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'TU_ACCESS_KEY_AQUI',
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

      {/* ── BANNER ── */}
      <section className="contacto__banner">
        <div className="contenedor contacto__banner-inner">
          <h1>Contacto</h1>
          <p>¿Quieres donar, ser voluntario o saber más? Estamos aquí.</p>
        </div>
      </section>

      {/* ── CONTENIDO PRINCIPAL ── */}
      <section className="seccion contacto__seccion">
        <div className="contenedor contacto__grid">

          {/* Formulario */}
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
                  className="btn btn--primario contacto__submit"
                  disabled={enviando}
                >
                  {enviando ? 'Enviando…' : 'Enviar mensaje'}
                </button>
              </form>
            )}
          </div>

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
                {/* Reemplaza URL_BLOG_AQUI con la URL real del blog */}
                <a href="https://www.mkonoamiga.blogspot.com" target="_blank" rel="noopener noreferrer">
                  www.mkonoamiga.blogspot.com
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
