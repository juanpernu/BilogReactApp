import React from 'react'
import Link from 'next/link'

// **
// import styles
// **
import "./menu.scss"

const Menu = () => (
  <header className='menu'>
    <nav>
      <div className='menu-container'>
        <ul>
          <li><Link href='https://www.mercadolibre.com.ar'><a>Inicio</a></Link></li>
          <li><Link href='https://www.mercadolibre.com.ar'><a>Sobre nosotros</a></Link></li>
          <li><Link href='https://www.mercadolibre.com.ar'><a>Contacto</a></Link></li>
        </ul>
      </div>
    </nav>
  </header>
)

export default Menu