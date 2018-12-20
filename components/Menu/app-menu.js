import React from 'react'
import Router from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
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
        <div className='logo-container'>
          <img src='/static/bilog-logo.svg' alt='Bilog - Logo' className='logo' />
        </div>
        <div className='user'>
          <div className='user-container'>
            <img src='https://scontent.faep13-1.fna.fbcdn.net/v/t1.0-9/13103455_10154161202099100_6668553032073451863_n.jpg?_nc_cat=110&_nc_ht=scontent.faep13-1.fna&oh=ecd560e81779ff81ca448d52adcf7cb7&oe=5C9F5A37' alt='User profile image' className='profile-pic' />
            <div className='user-container-loged'>
              <p>Buenos días,</p>
              <p className='user-loged-selected'>Juan Manuel Pernumian</p>
            </div>
          </div>
          <li><a onClick={this.handleOnClick}><span>Log Out</span><FontAwesomeIcon icon={faPowerOff} /></a></li>
        </div>
      </ul>
    )
  }
}

export default AppMenu