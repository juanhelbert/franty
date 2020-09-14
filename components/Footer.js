import React from 'react'
import { FaInstagram, FaLinkedinIn, FaFacebookF } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer>
      <h3 className='head-small head-centered'>
        <FaFacebookF /> <FaInstagram /> <FaLinkedinIn />
      </h3>
    </footer>
  )
}