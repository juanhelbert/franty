import React from 'react'
import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div className='head-logo'>
        <Link href="/"><img src="/images/Logo.png" alt="The logo"></img></Link>
      </div>
      <nav className='head-links'>
        <ul>
          <li><a href="/#projects">Nuestros Proyectos</a></li>
          <li><Link href="/forms"><a>Tu lugar</a></Link></li>
          <li className="contact"><a href="/#contact">Contacto</a></li>
        </ul>
      </nav>

    </header>
  )
}