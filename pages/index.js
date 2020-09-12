import React, { useEffect } from 'react'
import Head from 'next/head'
import './index.scss'

export default function Home() {

  useEffect(() => {
    const body = document.body;
    const content = document.querySelector('.js-content');
    const blocks = document.querySelectorAll('.block');

    const updateOffset = () => {
      requestAnimationFrame(updateOffset);
      body.style.setProperty('--y', content.scrollTop);
      updateProps();
    }

    const updateProps = () => {
      let i = -1;
      for (let block of blocks) {
        i += 1;
        let top = blocks[i].getBoundingClientRect().top;
        if (top < window.innerHeight * 1.3 && top > window.innerHeight * -1.3) {
          body.style.setProperty(`--yBlock-${i + 1}`, top);
        } else {
          body.style.setProperty(`--yBlock-${i + 1}`, 0);
        }
      }
    }

    updateProps();
    updateOffset();
  }, [])


  return (
    <div className="container">
      <Head>
        <title>Franty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main class="content js-content">
        <section class="block section-landing">
          <figure class="item-parallax-media">
            <img src="/images/home-intro.jpg" alt="Imagen intro" />
          </figure>
          <div class="item-parallax-content flex-container">
            <div class="landing-content centered-content">
              <h1 class="head-large">Franty</h1>
            </div>
          </div>
        </section>

        <section class="block section-intro">
          <div class="item-parallax-content flex-container">
            <div class="centered-content">
              <h2 class="head-small head-centered">Nuestra historia</h2>
              <p class="copy copy-white">
                Nuestra formación profesional como arquitectos, ha marcado una línea de acción que resuelve la dualidad diseño obra manteniendo el equilibrio indispensable entre ellos.
              </p>
              <p class="copy copy-white">
                La experiencia adquirida durante años de intensa tarea proyectual y constructiva, permite generar proyectos contundentes y simples, que dan como resultado obras económicas y de plazos acotados.
              </p>
              <p class="copy copy-white">
                Convencidos de que el Diseño es una cualidad relevante para nuestros clientes, Fundar dedica especial atención a la elaboración del Proyecto en todos sus detalles contando para ello con equipos de profesionales y recursos tecnológicos en permanente capacitación y actualización. La demanda plantea hoy diversas temáticas y Fundar las satisface con criterios de excelencia.
              </p>
            </div>
          </div>
        </section>

        <section class="block section-part">
          <figure class="item-parallax-media">
            <img src="/images/nuestros-proyectos.jpg" alt="Nuestros proyectos" />
          </figure>
          <div class="item-parallax-content flex-container">
            <div class="centered-content">
              <h1 class="head-large head-centered">Nuestros <br />proyectos</h1>
              {/* <p class="copy copy-white">
                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.
              </p> */}
            </div>
          </div>
        </section>

        <section class="block proyects-grid">
          <div class="item-parallax-content flex-container img-grid">
            <figure class="img-gridItem type-right">
              <img src="/images/proyecto-1.jpg" alt="Free Soul" />
              <figcaption class="img-caption">
                <h2 class="head-small">Free Soul</h2>
                <p class="copy copy-white">
                  Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                </p>
              </figcaption>
            </figure>
            <figure class="img-gridItem type-left">
              <img src="/images/proyecto-2.jpg" alt="Free Mind" />
              <figcaption class="img-caption">
                <h2 class="head-small">Free Mind</h2>
                <p class="copy copy-white">
                  A peep at some distant orb has power to raise and purify our thoughts like a strain of sacred music, or a noble picture, or a passage from the grander poets.
                </p>
              </figcaption>
            </figure>
            <figure class="img-gridItem type-right">
              <img src="/images/proyecto-3.jpg" alt="Free Air" />
              <figcaption class="img-caption">
                <h2 class="head-small">Free Air</h2>
                <p class="copy copy-white">
                  Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.
                </p>
              </figcaption>
            </figure>
          </div>
        </section>

        <section class="block section-end">
          <figure class="item-parallax-media">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/noah-silliman-141979.jpg" alt="" />
          </figure>
          <div class="item-parallax-content flex-container">
            <div class="landing-content centered-content">
              <h1 class="head-large">Back to Basic</h1>
            </div>
          </div>
        </section>

        <section class="custom-properties-ftw">
          <h3 class="head-small head-centered">Aca van las redes sociales</h3>
        </section>
      </main>

      <footer>
      </footer>

      <style jsx>{`
        

      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
