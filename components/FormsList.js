import React, { useState, useEffect } from 'react'
import { fetchEntries } from '../services/getData'

const Form = ({ data }) => {
  const { fields } = data || {}
  const { titulo, link, imagen } = fields || {}

  return (
    <a href={link} target='_blank' className='form'>
      <div style={{ backgroundImage: `url(${imagen.fields.file.url})` }} />
      <h2 className='head-small head-centered title'>{titulo}</h2>
    </a>
  )
}

export const FormsList = () => {
  const [forms, setForms] = useState([])
  const getForms = async () => setForms(await fetchEntries('formulario'))
  useEffect(() => { getForms() }, [])

  return (
    <section className='forms-list'>
      {(forms || []).map(i => <Form data={i} />)}
    </section>
  )
}