import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { fotos, programas } from '../../data/programasData'
import CTADonacion from '../../components/CTADonacion/CTADonacion'
import './Programas.scss'


function Programas() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ])

  const [selectedIndex, setSelectedIndex] = React.useState(0)

  React.useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => emblaApi.off('select', onSelect)
  }, [emblaApi])

  return (
    <div className="programas">

      {/* ── BANNER ── */}
      <section className="programas__banner">
        <div className="contenedor programas__banner-grid">
          <div className="programas__banner-texto">
            <h1>Nuestro trabajo</h1>
            <p>Seis líneas de acción para transformar vidas en Buhweju, Uganda.</p>
          </div>
          <div className="programas__banner-foto" aria-hidden="true" />
        </div>
      </section>

      {/* ── PROGRAMAS ── */}
      <section className="seccion programas__lista">
        <div className="contenedor">
          <div className="programas__grid">
            {programas.map((p, i) => (
              <article className={`programas__tarjeta programas__tarjeta--${p.mod}`} key={i}>

                <span className="programas__tarjeta-icono" aria-hidden="true">{p.icono}</span>
                <h3>{p.titulo}</h3>

                <p>{p.descripcion}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── HISTORIAS ── */}
      <section className="seccion programas__historias">
        <div className="contenedor">
          <h2 className="titulo-seccion">Historias de superación</h2>
          <p className="subtitulo-seccion">
            Cada niño tiene una historia. Estas son solo algunas de las vidas
            que hemos acompañado.
          </p>

          <div className="programas__galeria-embla" ref={emblaRef}>
            <div className="programas__galeria-track">
              {fotos.map((src, i) => (
                <div className="programas__galeria-slide" key={i}>
                  <img src={src} alt={`Foto del proyecto ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="programas__galeria-puntos">
            {fotos.map((_, i) => (
              <button
                key={i}
                className={`programas__galeria-punto${i === selectedIndex ? ' activo' : ''}`}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Ir a foto ${i + 1}`}
              />
            ))}
          </div>

        </div>

      </section>

      {/* ── TEXTO ── */}
      <div className="programas__historias-manifiesto">
        <div className="programas__historias-dos-cols">
          <p>En Mkono Amiga creemos que cada niño y niña tiene una historia que merece ser escuchada. No son solo números, ni casos, ni estadísticas. Son miradas, sueños, miedos, risas… son vidas que están creciendo y buscando su lugar en el mundo.</p>
          <p>Dar visibilidad a sus historias es darles voz. Es recordar que detrás de cada proyecto hay nombres, hay caminos difíciles y también una enorme capacidad de superación. Cuando compartimos sus realidades, no lo hacemos desde la pena, sino desde el respeto, la dignidad y la esperanza.</p>
        </div>
        <p>Las redes sociales pueden ser mucho más que un escaparate: pueden ser un puente. Un lugar donde conectar, donde generar empatía, donde transformar la indiferencia en compromiso.Contar sus historias es sembrar conciencia. Escucharlas es empezar a cambiar las cosas.</p>
        <p className="historias-frase">Sigue estas historias a través de Instagram</p>
        <a href="https://www.instagram.com/mkonoamiga" target="_blank" rel="noopener noreferrer">
          @mkonoamiga
        </a>
      </div>

      {/* ── CTA ── */}
      <CTADonacion
        className="programas__cta"
        heading="Ayúdanos a seguir"
        description="Con tu apoyo podemos llegar a más niños y ampliar nuestros programas."
      />

    </div>
  )
}

export default Programas
