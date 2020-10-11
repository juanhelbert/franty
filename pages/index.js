import './index.scss'
import React from 'react'
import Head from 'next/head'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { ContactForm } from '../components/ContactForm'
import { ParallaxProvider, ParallaxBanner, Parallax } from 'react-scroll-parallax'
import { Introduction } from '../components/Introduction'
import { Projects } from '../components/Projects'

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
            <ParallaxBanner style={{ height: '100vh' }} layers={[{ image: '/images/home-intro.jpg', amount: 0.5 }]}>
              <h1 className='head-large parallax-text'>Franty</h1>
            </ParallaxBanner>
          </section>

          <Introduction />

          <ParallaxBanner layers={[{ image: '/images/nuestros-proyectos.jpg', amount: 0.5 }]} style={{ height: '100vh' }}>
            <h2 className='head-large parallax-text'>Nuestros <br />proyectos</h2>
          </ParallaxBanner>

          <Projects />

          <ParallaxBanner layers={[{ image: '/images/contacto.jpg', amount: 0.5 }]} style={{ height: '35vh', marginTop: '15vh' }} >
            <h3 className="head-large parallax-text">Contacto</h3>
          </ParallaxBanner>

          <ContactForm />

        </main>

        <Footer />

      </div>
    </ParallaxProvider >
  )
}
