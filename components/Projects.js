import React, { useState, useEffect } from 'react'
import { fetchEntries } from '../services/getData'
import { Parallax } from 'react-scroll-parallax'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const Projects = () => {
  const [projects, setProjects] = useState([])
  const getProjects = async () => setProjects(await fetchEntries('proyecto'))
  useEffect(() => getProjects(), [])

  console.log({ projects })

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className='copy copy-white'>{children}</p>
    }
  }

  return (
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
  )
}