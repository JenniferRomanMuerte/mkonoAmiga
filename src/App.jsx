import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Inicio from './pages/Inicio/Inicio'
import QuienesSomos from './pages/QuienesSomos/QuienesSomos'
import Programas from './pages/Programas/Programas'
import Apoyanos from './pages/Apoyanos/Apoyanos'
import Contacto from './pages/Contacto/Contacto'

// Sube al inicio al cambiar de página
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"               element={<Inicio />} />
          <Route path="/quienes-somos"  element={<QuienesSomos />} />
          <Route path="/programas"      element={<Programas />} />
          <Route path="/apoyanos"       element={<Apoyanos />} />
          <Route path="/contacto"       element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
