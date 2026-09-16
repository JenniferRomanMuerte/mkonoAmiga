import Inicio from './pages/Inicio/Inicio'
import QuienesSomos from './pages/QuienesSomos/QuienesSomos'
import Programas from './pages/Programas/Programas'
import Apoyanos from './pages/Apoyanos/Apoyanos'
import Transparencia from './pages/Transparencia/Transparencia'
import Contacto from './pages/Contacto/Contacto'
import AvisoLegal from './pages/AvisoLegal/AvisoLegal'
import Privacidad from './pages/Privacidad/Privacidad'
import Cookies from './pages/Cookies/Cookies'

// Componente de cada ruta declarada en src/data/rutas.js
export const PAGINAS = {
  '/':              Inicio,
  '/quienes-somos': QuienesSomos,
  '/programas':     Programas,
  '/apoyanos':      Apoyanos,
  '/transparencia': Transparencia,
  '/contacto':      Contacto,
  '/aviso-legal':   AvisoLegal,
  '/privacidad':    Privacidad,
  '/cookies':       Cookies,
}
