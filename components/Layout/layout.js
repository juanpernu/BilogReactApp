import React from 'react'
import Head from 'next/head'
import Footer from '../Footer/footer'
import Menu from '../Menu/menu'

// **
// import styles
// **
import "./layout.scss"

const Layout = ({children}) => (
  <div className="root">
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <meta name='description' content='Seguí el estado de los proyectos de Ley.' />
      <link href='/static/fonts/index.css' rel='stylesheet' />
      <title>Bilog Soluciones Informáticas</title>
    </Head>
    <Menu />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default Layout