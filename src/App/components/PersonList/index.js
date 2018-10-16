import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  handleSubmit(event) {
    event.preventDefault();

    let logInData = {
      "access": {
        "web_user": 'demo',
        "user": 'demo',
        "pass": 'demo'
      }
    }
    
    const axiosConfig = {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      url: 'http://bilogweb.com.ar/WebService.asmx/ObtenerPermisos',
    };

    logInData = '"input": "{"access":{"web_user":"demo","user":"demo","pass":"demo"}}"';

    console.log(logInData);
    

    // Send a POST request
    axios({
      method: 'POST',
      url: "http://bilogweb.com.ar/WebService.asmx/ObtenerPermisos",
      data: {
        input: {},
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button type="submit">Add</button>
      </form>
    )
  }
}