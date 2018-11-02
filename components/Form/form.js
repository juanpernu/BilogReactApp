import React from 'react'

// **
// import styles
// **
import "./form.scss"

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state
  }

  render() {
    return (
      <form className="form">
        <label>
        Name:
        <input type="text" name="name" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}