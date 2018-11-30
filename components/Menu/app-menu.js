import React from 'react'
import Router from 'next/router'
import AuthService from '../../services/authService'

const auth = new AuthService('http://localhost:3000')

class AppMenu extends React.Component {
  constructor(props){
    super(props)
    this.handleOnClick = this.handleOnClick.bind(this)
  }

  handleOnClick(evt, ctx){
    evt.preventDefault()
    auth.logout(ctx)
    Router.push('/')
  }

  render() {
    return (
      <ul className='app-menu'>
        <img src='/static/bilog-logo.svg' alt='Bilog - Logo' className='logo' />
        <li><a onClick={this.handleOnClick}>Logout</a></li>
      </ul>
    )
  }
}

export default AppMenu