import React from 'react';
import { obtenerPermisos } from '../../../../api';

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    

    //TO DO: Recibe data from logIn component
    const logInData = {input: '{"access":{"web_user":"demo","user":"demo","pass":"demo"}}'};
    obtenerPermisos(logInData);
  }

  handleUserChange(evt) {
    console.log(evt.target.value);
    this.setState({
      user: evt.target.value
    })
  }

  render() {
    return (
      <form
        className='login_form'
        onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            name="user"
            placeholder="Usuario"
            title="Usuario"
            value={this.state.user}
            onChange={this.handleUserChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    )
  }
}