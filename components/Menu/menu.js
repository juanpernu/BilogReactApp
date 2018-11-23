import React from 'react'
import Link from 'next/link'

// **
// import styles
// **
import "./menu.scss"

export default class Menu extends React.Component {

  render() {
    return (
      <header className='menu'>
        <nav>
          <div className='menu-container'>
            <ul>
              <li><Link href='https://www.mercadolibre.com.ar'>Inicio</Link></li>
              <li><Link href='https://www.mercadolibre.com.ar'>Sobre nosotros</Link></li>
              <li><Link href='https://www.mercadolibre.com.ar'>Contacto</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}