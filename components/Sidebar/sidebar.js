import React from 'react'
import Link from '../Link/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faUserFriends } from '@fortawesome/free-solid-svg-icons'

// **
// import styles
// **
import "./sidebar.scss"

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return(
      <div className='sidebar'>
        <Link href='/pacientes'><FontAwesomeIcon size='1x' icon={faUserFriends} /><span>Pacientes</span></Link>
        <Link href='/agenda'><FontAwesomeIcon size='1x' icon={faAddressBook} /><span>Agenda</span></Link>
      </div>
    )
  }
}

export default Sidebar;