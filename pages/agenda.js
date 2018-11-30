import React from 'react'
import Layout from '../components/Layout/layout'
import Sidebar from '../components/Sidebar/sidebar'
import Menu from '../components/Menu/menu'
import Grid from '../components/Grid/grid'

// **
// import styles
// **
import "./commons.scss"

const Agenda = () => (
  <Layout>
    <Menu />
    <div className="agenda-container">
      <Sidebar />
      <Grid />
    </div>
  </Layout>
)

export default Agenda
