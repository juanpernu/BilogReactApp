import React from 'react'
import Link from 'next/link'

// **
// import styles
// **
import "./footer.scss"

const Footer = () => (
  <footer className='footer'>
    <div className='footer-container'>
      <div>
        Logo
      </div>
      <div>
        <ul>
          <li><Link href='https://www.mercadolibre.com.ar'><a>Inicio</a></Link></li>
          <li><Link href='https://www.mercadolibre.com.ar'><a>Sobre nosotros</a></Link></li>
          <li><Link href='https://www.mercadolibre.com.ar'><a>Contacto</a></Link></li>
        </ul>
      </div>
      <div>
        Redes
      </div>
    </div>
  </footer>
)

export default Footer