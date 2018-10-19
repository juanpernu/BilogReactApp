import React from 'react';
import { obtenerPermisos } from '../../../../api';

import Input from './Input';
import { timingSafeEqual } from 'crypto';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    

    //TO DO: Recibe data from logIn component
    const logInData = {input: '{"access":{"web_user":"demo","user":"demo","pass":"demo"}}'};
    obtenerPermisos(logInData);
  }

  render() {
    return (
      <form
        className='login_form'
        onSubmit={this.getUser}>
        <label>
          <Input type="text" name="user" placeholder="Usuario" title="Usuario" value={this.binds.value} onChange={this.handleIncrement} />
        </label>
        <button type="submit">Add</button>
      </form>
    )
  }
}