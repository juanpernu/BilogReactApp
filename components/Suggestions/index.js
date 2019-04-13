import React from 'react'
import PacienteService from '../../services/pacienteService'

// **
// import styles
// **
import "./suggestions.scss"

class Suggestions extends React.Component {
  constructor(props){
    super(props)
    this.handleGetPacienteKey = this.handleGetPacienteKey.bind(this)
  }

  handleGetPacienteKey(key) {
    let pacienteId = key;

    /**
     * @todo construir el objeto de loginData de forma
     * dinamica sin ser hardcodeado, en search hacer lo mismo 
     */

    const userLoginData = {
      "Acceso": {
        "WebUser": "demo",
        "User": "demo",
        "Password": "demo"
      },
      "Paciente": {
        "IdPaciente": pacienteId
      }
    }

    PacienteService.selectPaciente(userLoginData)
    .then(
      res => {
        console.log(res.response)
      }
    )
  }

  render(){
    const options = this.props.results.map(result => (
      <li key={result.idPaciente} onClick={() => {this.handleGetPacienteKey(result.idPaciente)}}>
        {result.apeNom}
      </li>
    ))

    return(
      <ul>{options}</ul>
    )
  }
}

export default Suggestions