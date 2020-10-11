import React, { useState, useEffect } from 'react'
import { fetchEntries } from '../services/getData'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className='copy copy-white'>{children}</p>
  }
}

export const Introduction = () => {
  const [introduction, setIntroduction] = useState([])
  const getIntroduction = async () => setIntroduction(await fetchEntries('introduccion'))
  useEffect(() => { getIntroduction() }, [])

  const { fields } = introduction[0] || {}
  const { titulo, contenido } = fields || {}

  return (
    <section className='block section-intro'>
      <div className='flex-container' style={{ minHeight: '100vh' }}>
        <div className='centered-content'>
          {titulo && contenido &&
            <>
              <h2 className='head-small head-centered'>{titulo}</h2>
              {documentToReactComponents(contenido, options)}
            </>
          }
        </div>
      </div>
    </section>
  )
}