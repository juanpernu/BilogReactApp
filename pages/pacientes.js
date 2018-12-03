import React from 'react'
import Layout from '../components/Layout/layout'
import Sidebar from '../components/Sidebar/sidebar'
import Menu from '../components/Menu/menu'
import Search from '../components/Search/search'

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
