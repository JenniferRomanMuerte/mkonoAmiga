import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { RUTAS } from './data/rutas'
import { PAGINAS } from './paginas'

// Sube al inicio al cambiar de página
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

// Lleva el foco al contenido principal sin pasar por toda la navegación
function saltarAlContenido(e) {
  const contenido = document.getElementById('contenido')
  if (!contenido) return
  e.preventDefault()
  contenido.focus()
  contenido.scrollIntoView()
}

function App() {
  return (
    <>
      <a href="#contenido" className="saltar-contenido" onClick={saltarAlContenido}>
        Saltar al contenido
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="contenido" tabIndex={-1}>
        <Routes>
          {RUTAS.map(({ path }) => {
            const Pagina = PAGINAS[path]
            return <Route key={path} path={path} element={<Pagina />} />
          })}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
