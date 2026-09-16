import { describe, it, expect } from 'vitest'
import { validarContacto, LIMITES } from './validarContacto'

const FORM_VALIDO = {
  nombre: 'Ana',
  email: 'ana@correo.es',
  asunto: 'Voluntariado',
  mensaje: 'Hola, quiero colaborar con la asociación.',
  consentimiento: true,
}

describe('validarContacto', () => {
  it('no devuelve errores con un formulario válido', () => {
    expect(validarContacto(FORM_VALIDO)).toEqual({})
  })

  it('marca todos los campos cuando el formulario está vacío', () => {
    const errores = validarContacto({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: '',
      consentimiento: false,
    })
    expect(Object.keys(errores)).toEqual(['nombre', 'email', 'asunto', 'mensaje', 'consentimiento'])
  })

  it('trata como vacíos los campos que solo tienen espacios', () => {
    const errores = validarContacto({ ...FORM_VALIDO, nombre: '   ', mensaje: '          ' })
    expect(errores).toEqual({
      nombre: 'Escribe tu nombre.',
      mensaje: 'Escribe tu mensaje.',
    })
  })

  it.each(['ana', 'ana@correo', 'ana@.es', 'ana correo@correo.es'])(
    'rechaza el email mal formado "%s"',
    (email) => {
      expect(validarContacto({ ...FORM_VALIDO, email })).toHaveProperty('email')
    },
  )

  it('rechaza un mensaje demasiado largo', () => {
    const mensaje = 'x'.repeat(LIMITES.mensaje.max + 1)
    expect(validarContacto({ ...FORM_VALIDO, mensaje })).toEqual({
      mensaje: `El mensaje no puede superar los ${LIMITES.mensaje.max} caracteres.`,
    })
  })

  it('exige aceptar la política de privacidad', () => {
    expect(validarContacto({ ...FORM_VALIDO, consentimiento: false })).toHaveProperty(
      'consentimiento',
    )
  })
})
