// Validación del formulario de contacto.
// Está separada del componente para poder probarla de forma aislada.

export const LIMITES = {
  nombre:  { min: 2,  max: 100 },
  asunto:  { min: 3,  max: 150 },
  mensaje: { min: 10, max: 5000 },
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Comprueba un campo de texto obligatorio con longitud mínima y máxima
function validarTexto(valor, { min, max }, textos) {
  const limpio = valor.trim()
  if (!limpio)             return textos.vacio
  if (limpio.length < min) return textos.corto
  if (limpio.length > max) return textos.largo
  return null
}

// Devuelve { campo: mensaje } con los errores encontrados; vacío si todo es válido
export function validarContacto(form) {
  const errores = {}

  const nombre = validarTexto(form.nombre, LIMITES.nombre, {
    vacio: 'Escribe tu nombre.',
    corto: 'El nombre es demasiado corto.',
    largo: `El nombre no puede superar los ${LIMITES.nombre.max} caracteres.`,
  })
  if (nombre) errores.nombre = nombre

  const email = form.email.trim()
  if (!email) errores.email = 'Escribe tu correo electrónico.'
  else if (!EMAIL_REGEX.test(email)) errores.email = 'Revisa el correo electrónico: no parece válido.'

  const asunto = validarTexto(form.asunto, LIMITES.asunto, {
    vacio: 'Indica el asunto de tu mensaje.',
    corto: 'El asunto es demasiado corto.',
    largo: `El asunto no puede superar los ${LIMITES.asunto.max} caracteres.`,
  })
  if (asunto) errores.asunto = asunto

  const mensaje = validarTexto(form.mensaje, LIMITES.mensaje, {
    vacio: 'Escribe tu mensaje.',
    corto: `El mensaje debe tener al menos ${LIMITES.mensaje.min} caracteres.`,
    largo: `El mensaje no puede superar los ${LIMITES.mensaje.max} caracteres.`,
  })
  if (mensaje) errores.mensaje = mensaje

  if (!form.consentimiento) {
    errores.consentimiento = 'Debes aceptar la política de privacidad para enviar el mensaje.'
  }

  return errores
}
