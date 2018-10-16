import React from 'react';
import { obtenerPermisos } from '../../../../Api'

export default class PersonList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSubmit(event) {
    event.preventDefault();

    const logInData = '{"access":{"web_user":"demo","user":"demo","pass":"demo"}}';

    console.log(logInData);

    obtenerPermisos(logInData);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Add</button>
      </form>
    )
  }
}