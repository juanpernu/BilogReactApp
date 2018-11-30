import React from 'react'
import LoginMenu from './login-menu'
import AppMenu from './app-menu'

// **
// import styles
// **
import "./menu.scss"

const Menu = (props) => (
  <header className='menu'>
    <nav>
      <div className='menu-container'>
        { props.menuContext === 'login' ?  <LoginMenu /> : <AppMenu /> }
      </div>
    </nav>
  </header>
)

export default Menu