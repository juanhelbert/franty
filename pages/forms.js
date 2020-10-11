import React from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Head from 'next/head'
import { Header } from '../components/Header'
import { FormsList } from '../components/FormsList'
import './index.scss'
import './forms.scss'

export default function Forms() {

  return (
    <ParallaxProvider>
      <div className="container">
        <Head>
          <title>Forms</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='container forms'>
          <main className='content js-content'>
            <Header />

            <section className='block section-landing' style={{ paddingTop: 0 }}>
              <ParallaxBanner style={{ height: '100vh' }} layers={[{ image: '/images/formularios-intro.jpg', amount: 0.5 }]}>
                <h1 className='head-large parallax-text'>Tu lugar</h1>
              </ParallaxBanner>
            </section>

            <FormsList />

          </main>
        </div>
      </div>
    </ParallaxProvider >
  )
}
