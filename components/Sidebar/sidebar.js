import React from 'react'
import Calendar from 'react-calendar/dist/entry.nostyle'
import './calendar.scss'

// **
// import styles
// **
import "./sidebar.scss"

class Sidebar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
    this.onChange = this.onChange.bind(this)

  }

  onChange(date){
    this.setState({ date })
    /**
     * @todo acá hay que ejecutar el servicio que busca la agenda del dia seleccionado 
     */
  }

  render() {
    return(
      <div className='sidebar'>
      <h2>Bienvenido a tu agenda, Juan</h2>
      <p>Acá vas a poder gestionar todos tus turnos.</p>
      <Calendar
        onChange={this.onChange}
        value={this.state.date}
        locale="es"
      />
    </div>
    )
  }
}

export default Sidebar;