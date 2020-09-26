import React from 'react'

export const Header = () => {
    return (
      <header>
          <div className='head-logo'>
            <img src="/images/Logo.png" alt="The logo"></img>
          </div>
          <nav className='head-links'>
            <ul>
              <li><a href="#proyects">Nuestros Proyectos</a></li>
              <li><a href="#">Formularios</a></li>
              <li className="contact"><a href="#contact">Contacto</a></li>
            </ul>            
          </nav>
        
      </header>
    )
  }