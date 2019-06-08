import React from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Menu from '../components/Menu'
import Grid from '../components/Grid'

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
