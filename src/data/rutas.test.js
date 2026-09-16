import { describe, it, expect } from 'vitest'
import { RUTAS, seoDe } from './rutas'
import { PAGINAS } from '../paginas'

describe('rutas', () => {
  it('cada ruta tiene su página y cada página su ruta', () => {
    expect(Object.keys(PAGINAS).sort()).toEqual(RUTAS.map((r) => r.path).sort())
  })

  it('no hay rutas repetidas', () => {
    const paths = RUTAS.map((r) => r.path)
    expect(new Set(paths).size).toBe(paths.length)
  })

  it('todas las rutas tienen título y descripción', () => {
    for (const ruta of RUTAS) {
      expect(ruta.title, ruta.path).toBeTruthy()
      expect(ruta.description, ruta.path).toBeTruthy()
    }
  })

  it('seoDe falla con una ruta que no existe', () => {
    expect(() => seoDe('/no-existe')).toThrow()
  })
})
