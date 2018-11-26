import React from 'react'
import Link from 'next/link'
import { obtenerPaciente } from '../../services/pacienteService'

// **
// import styles
// **
import "./form.scss"

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
        bilogUser: '',
        user: '',
        password: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleBilogUserChange = this.handleBilogUserChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleBilogUserChange(evt) {
    // console.log(evt.target.value);
    this.setState({
      bilogUser: evt.target.value
    })
  }

  handleUserChange(evt) {
    // console.log(evt.target.value);
    this.setState({
      user: evt.target.value
    })
  }

  handlePasswordChange(evt) {
    // console.log(evt.target.value);
    this.setState({
      password: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    
    const userLoginData = {
      "Acceso": {
        "WebUser": this.state.bilogUser,
        "User": this.state.user,
        "Password": this.state.password
      },
      "Paciente": {
          "IdPaciente": 140
      }
    }
    
    obtenerPaciente(userLoginData)
    .then(res => {
      console.log(res)
    })
  }

  render() {
    return (
      <div className="form-container spacer">
        <h3>Ingresá a Bilog</h3>
        <form className="form" onSubmit={this.handleSubmit}>
          <label>Usuario Bilog</label>
          <input
            type="text"
            name="user-bilog"
            title="Usuario Bilog"
            value={this.state.bilogUser}
            onChange={this.handleBilogUserChange}
          />

          <label>Usuario</label>
          <input
            type="text"
            name="user"
            title="Usuario"
            value={this.state.user}
            onChange={this.handleUserChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            title="Password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
          <button className="button" type="submit">
            <span>Continuar</span>
          </button>
        </form>
          <p className='sign-up'><Link href='https://www.mercadolibre.com.ar'><a>¿Todavía no sos miembro? Registrate acá</a></Link></p>
      </div>
    )
  }
}

export default withCookies(Form)