import React from 'react'
import Layout from '../components/Layout/layout'
import Sidebar from '../components/Sidebar/sidebar'
import Grid from '../components/Grid/grid'

// **
// import styles
// **
import "./commons.scss"

const Agenda = () => (
  <Layout customClass='agenda'>
    <Sidebar />
    <Grid />
  </Layout>
)

export default Agenda
