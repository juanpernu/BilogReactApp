import React from 'react';

const Input = (props) => {
  return (  
    <div className="bilog_form__group">
      <label htmlFor={props.name} className="form-label">{props.title}</label>
      <input
        className="bilog_form__input"
        id={props.name}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder} 
      />
    </div>
  )
}

export default Input;