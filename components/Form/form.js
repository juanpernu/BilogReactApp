import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import AuthService from '../../services/authService'
import permisosService from '../../services/permisosService'

const auth = new AuthService('http://localhost:3000')

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
    this.handleOnKeyDown = this.handleOnKeyDown.bind(this)
  }

  // componentDidMount (ctx) {
  //   const hasCookies = auth.getLoginData(ctx)

  //   /**
  //    * @todo crear un helper para chequear que el objeto de la cookie no está vacio 
  //    */
  //   if (hasCookies && JSON.stringify(hasCookies) !== '{}') {
  //     console.log('logeado')
  //     Router.push('/agenda')   // redirect if you're already logged in
  //   } else {
  //     console.log('deslogeado')
  //   }
  // }

  handleBilogUserChange(evt) {
    this.setState({
      bilogUser: evt.target.value
    })
  }

  handleUserChange(evt) {
    this.setState({
      user: evt.target.value
    })
  }

  handlePasswordChange(evt) {
    this.setState({
      password: evt.target.value
    })
  }

  handleOnKeyDown(){
    if(e.keyCode == 13 && e.shiftKey == false) {
      handleSubmit()
    }
  }

  async handleSubmit(evt, ctx) {
    evt.preventDefault()

    await auth.login(
      ctx,
      this.state.bilogUser,
      this.state.user,
      this.state.password
      )
      .then(res => {
        permisosService.handlePermisos(res)
      })
      .catch(e => console.log(e))  // you would show/hide error messages with component state here 
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
          <button
            className="button"
            type="submit"
            onKeyDown={this.handleOnKeyDown}
          >
            <span>Continuar</span>
          </button>
        </form>
          <p className='sign-up'><Link href='https://www.mercadolibre.com.ar'><a>¿Todavía no sos miembro? Registrate acá</a></Link></p>
      </div>
    )
  }
}

export default Form