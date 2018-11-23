import React from 'react'
import Link from 'next/link'

// **
// import styles
// **
import "./form.scss"

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this)
  }

  handleUserChange(evt) {
    console.log(evt.target.value);
    this.setState({
      user: evt.target.value
    })
  }

  render() {
    return (
      <div className="form-container spacer">
        <h3>Ingresá a Bilog</h3>
        <form className="form">
          <label>Usuario Bilog</label>
          <input
            type="text"
            name="user-bilog"
            title="Usuario Bilog"
            value={this.state.user}
            onChange={this.handleUserChange}
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
            value={this.state.user}
            onChange={this.handleUserChange}
          />
          <button className="button" type="submit">
            <span>Continuar</span>
          </button>
        </form>
          <p className='sign-up'><Link href='https://www.mercadolibre.com.ar'>¿Todavía no sos miembro? Registrate acá</Link></p>
      </div>
    )
  }
}