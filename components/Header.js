import Link from 'next/link'
import React, { useState } from 'react'

export const Header = () => {
  const [active, setActive] = useState(false)
  return (
    <header>
      <div className='head-logo'>
        <Link href="/"><img src="/images/Logo.png" alt="The logo"></img></Link>
      </div>
      <nav className='head-links-desktop'>
        <ul>
          <li><a href="/#projects">Nuestros Proyectos</a></li>
          <li><Link href="/forms"><a>Tu lugar</a></Link></li>
          <li className="contact"><a href="/#contact">Contacto</a></li>
        </ul>
      </nav>

      <div class="burger-menu" onClick={() => setActive(!active)}>
            <i class="fa fa-bars"></i>
       </div>

       

        
      <div>
        <nav >
          <ul className={active ? 'nav-test active' : 'nav-test'}>
              <li><a href="/#projects">Nuestros Proyectos</a></li>
              <li><Link href="/forms"><a>Tu lugar</a></Link></li>
              <li className="contact"><a href="/#contact">Contacto</a></li>
            </ul>
        </nav>
      </div>

    </header>
  )
}