import React from 'react'
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import Head from 'next/head'
import './index.scss'

export default function Forms() {

  return (
    <ParallaxProvider>
      <div className="container">
        <Head>
          <title>Forms</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="content js-content">
          <p className="copy copy-white">
            Forms page
          </p>
        </main>
      </div>
    </ParallaxProvider >
  )
}
