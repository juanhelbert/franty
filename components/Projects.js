import React, { useState, useEffect } from 'react'
import { fetchEntries } from '../services/getData'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className='copy copy-white'>{children}</p>
  }
}

const Project = ({ data, idx }) => {
  const { fields } = data || {}
  const { titulo, descripcion, imagen, show } = fields || {}
  const isOdd = idx % 2

  if (!show) return null

  return (
    <figure className={`img-gridItem type-${isOdd ? 'left' : 'right'}`}>
      <img src={imagen[0].fields.file.url} alt={titulo} />
      <figcaption className='img-caption'>
        <h2 className='head-small'>{titulo}</h2>
        {documentToReactComponents(descripcion, options)}
      </figcaption>
    </figure>
  )
}

export const Projects = () => {
  const [projects, setProjects] = useState([])
  const getProjects = async () => setProjects(await fetchEntries('proyecto'))
  useEffect(() => { getProjects() }, [])

  const sortedProjects = (projects || []).sort((a, b) => (a.fields.orden > b.fields.orden) ? 1 : ((b.fields.orden > a.fields.orden) ? -1 : 0))

  return (
    <section id='projects' className='block proyects-grid'>
      <div className='item-parallax-content flex-container img-grid'>
        {(sortedProjects || []).map((item, idx) => <Project data={item} idx={idx} />)}
      </div>
    </section>
  )
}