import React, { useState, useEffect } from 'react'
import { fetchEntries } from '../services/getData'
import { Parallax } from 'react-scroll-parallax'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const Introduction = () => {
  const [introduction, setIntroduction] = useState([])
  const getIntroduction = async () => setIntroduction(await fetchEntries('introduccion'))
  useEffect(() => { getIntroduction() }, [])

  const { fields } = introduction[0] || {}
  const { titulo, contenido } = fields || {}

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p className='copy copy-white'>{children}</p>
    }
  }

  return (
    <section className='block section-intro'>
      <div className='flex-container'>
        <div className='centered-content'>
          {titulo && contenido &&
            <Parallax y={[40, 0]} tagOuter='figure'>
              <h2 className='head-small head-centered'>{titulo}</h2>
              {documentToReactComponents(contenido, options)}
            </Parallax>
          }
        </div>
      </div>
    </section>
  )
}