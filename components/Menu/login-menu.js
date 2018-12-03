import React from 'react'
import Link from 'next/link'

const LoginMenu = ({}) => (
  <ul>
    <li><Link href='http://bilog.com.ar/'><a>Inicio</a></Link></li>
    <li><Link href='http://bilog.com.ar/about-bilog.html'><a>Sobre nosotros</a></Link></li>
    <li><Link href='http://bilog.com.ar/bilog-contact.html'><a>Contacto</a></Link></li>
  </ul>
)

export default LoginMenu