import './index.scss'
import React from 'react'
import Head from 'next/head'
import { ContactForm } from '../components/ContactForm'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax'

export default function Home() {
  return (
    <ParallaxProvider>
      <Head>
        <title>Franty</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='container'>
        <main className='content js-content'>
          <Header />

          <section className='block section-landing' style={{ paddingTop: 0 }}>
            <ParallaxBanner
              style={{ height: '100vh' }}
              layers={[{
                image: '/images/home-intro.jpg',
                amount: 0.5
              }]}
            >
              <h1 className='head-large parallax-text'>Franty</h1>
            </ParallaxBanner>
          </section>

          <section className='block section-intro'>
            <div className='flex-container'>
              <div className='centered-content'>
                <Parallax y={[30, -10]} tagOuter='figure'>
                  <h2 className='head-small head-centered'>Nuestra historia</h2>

                  <p className='copy copy-white'>
                    Nuestra formación profesional como arquitectos, ha marcado una línea de acción que resuelve la dualidad diseño obra manteniendo el equilibrio indispensable entre ellos.
                  </p>
                  <p className='copy copy-white'>
                    La experiencia adquirida durante años de intensa tarea proyectual y constructiva, permite generar proyectos contundentes y simples, que dan como resultado obras económicas y de plazos acotados.
                  </p>
                  <p className='copy copy-white'>
                    Convencidos de que el Diseño es una cualidad relevante para nuestros clientes, Fundar dedica especial atención a la elaboración del Proyecto en todos sus detalles contando para ello con equipos de profesionales y recursos tecnológicos en permanente capacitación y actualización. La demanda plantea hoy diversas temáticas y Fundar las satisface con criterios de excelencia.
                </p>
                </Parallax>
              </div>
            </div>
          </section>

          <ParallaxBanner
            layers={[{
              image: '/images/nuestros-proyectos.jpg',
              amount: 0.5,
            }]}
            style={{ height: '100vh' }}
          >
            <h2 className='head-large parallax-text'>Nuestros <br />proyectos</h2>
          </ParallaxBanner>

          <section className='block proyects-grid'>
            <div className='item-parallax-content flex-container img-grid'>
              <Parallax x={[-15, 5]} y={[40, 0]} tagOuter='figure'>
                <figure className='img-gridItem type-right'>
                  <img src='/images/proyecto-1.jpg' alt='Free Soul' />
                  <figcaption className='img-caption'>
                    <h2 className='head-small'>Free Soul</h2>
                    <p className='copy copy-white'>
                      Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                  </p>
                  </figcaption>
                </figure>
              </Parallax>

              <Parallax x={[15, -5]} y={[40, 0]} tagOuter='figure'>
                <figure className='img-gridItem type-left'>
                  <img src='/images/proyecto-2.jpg' alt='Free Mind' />
                  <figcaption className='img-caption'>
                    <h2 className='head-small'>Free Mind</h2>
                    <p className='copy copy-white'>
                      A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets.
                </p>
                  </figcaption>
                </figure>
              </Parallax>

              <Parallax x={[-15, 5]} y={[40, 0]} tagOuter='figure'>
                <figure className='img-gridItem type-right'>
                  <img src='/images/proyecto-3.jpg' alt="Free Air" />
                  <figcaption className="img-caption">
                    <h2 className="head-small">Free Air</h2>
                    <p className="copy copy-white">
                      Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                    </p>
                  </figcaption>
                </figure>
              </Parallax>
            </div>
          </section>

          <ParallaxBanner
            layers={[{
              image: '/images/contacto.jpg',
              amount: 0.5,
            }]}
            style={{ height: '35vh', marginTop: '50vh' }}
          >
            <h3 className="head-large parallax-text">Contacto</h3>
          </ParallaxBanner>

          <Parallax y={[-10, 10]} >
            <ContactForm />
          </Parallax>

        </main>

        <Footer />

      </div>
    </ParallaxProvider >
  )
}
