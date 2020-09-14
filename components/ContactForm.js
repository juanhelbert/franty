import React, { useState } from 'react'

const NUMERO_DE_TELEFONO = '5493364274904'

export const ContactForm = () => {
  const [userInfo, setUserInfo] = useState({})

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formatedText = `
    *Nombre*: ${(userInfo.name || '').replace(' ', '%20')}
    %0A*Email*: ${(userInfo.email || '').replace(' ', '%20')}
    %0A*Mensaje*: ${(userInfo.content || '').replace(' ', '%20')}
    `
    window.open(`https://wa.me/${NUMERO_DE_TELEFONO}?text=${formatedText}`)
  }

  return (
    <section className='contact-form'>
      <div className='flex-container'>
        <div className='centered-content'>
          <form onSubmit={handleSubmit}>
            <input
              required
              name='name'
              type='text'
              placeholder='Nombre'
              value={userInfo.name}
              onChange={e => handleChange(e)}
            />

            <input
              required
              name='email'
              type='email'
              placeholder='Email'
              value={userInfo.email}
              onChange={e => handleChange(e)}
            />

            <textarea
              required
              type='text'
              name='content'
              placeholder='Mensaje'
              onChange={e => handleChange(e)}
            />

            <button type='submit'>Enviar</button>
          </form>
        </div>
      </div>
    </section>
  )
}