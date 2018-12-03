import React from 'react'

// **
// import styles
// **
import "./suggestions.scss"

const Suggestions = (props) => {
  const options = props.results.map(result => (
    <li key={result.idPaciente}>
      {result.apeNom}
    </li>
  ))
  return <ul className={props.className}>{options}</ul>
}

export default Suggestions