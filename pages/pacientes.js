import React from 'react'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import Menu from '../components/Menu'
import Search from '../components/Search'

// **
// import styles
// **
import "./commons.scss"

const Pacientes = () => (
  <Layout>
    <Menu />
    <div className="pacientes-container">
      <Sidebar />
      <Search />
    </div>
  </Layout>
)

export default Pacientes
