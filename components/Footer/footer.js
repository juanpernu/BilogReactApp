import React from 'react'
import Link from 'next/link'

// **
// import styles
// **
import "./footer.scss"

export default class Footer extends React.Component {

  render() {
    return (
      <footer className='footer'>
        <div className='footer-container'>
          <div>
            Logo
          </div>
          <div>
            <ul>
              <li><Link href='https://www.mercadolibre.com.ar'>Inicio</Link></li>
              <li><Link href='https://www.mercadolibre.com.ar'>Sobre nosotros</Link></li>
              <li><Link href='https://www.mercadolibre.com.ar'>Contacto</Link></li>
            </ul>
          </div>
          <div>
            Redes
          </div>
        </div>
      </footer>
    )
  }
}