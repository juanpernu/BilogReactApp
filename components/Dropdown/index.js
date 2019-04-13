import React from 'react';

// **
// import styles
// **
import "./dropdown.scss"

class Dropdown extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isOpen: false
    }
    this.handleClose = this.handleClose.bind(this)
  }

  handleClose() {
    this.setState({ isOpen: false })
 }

 render(){
   return (
    <div className={`dropdown ${this.props.className}`}>
      <p className='user-list-item'>Usuario 1</p>
      <p className='user-list-item'>Usuario 2</p>
    </div>
   )
 }

}

export default Dropdown;