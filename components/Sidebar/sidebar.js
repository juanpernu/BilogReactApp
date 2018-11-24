import React from 'react'

// **
// import styles
// **
import "./sidebar.scss"

const Sidebar = ({ name, day}) => (
  <div className='sidebar'>
    <img src='/static/bilog-logo.svg' alt='Bilog - Logo' className='logo' />
    <h2>Bienvenido a tu agenda, Juan</h2>
    <p>Acá vas a poder gestionar todos tus turnos.</p>
    <div className='date'>
      <p className='date-day'>Viernes</p>
      <p className='date-day-number'>05 de Octubre</p>
    </div>
    <div className='date-nav'>
      <button type="button" role='presentation' className='date-prev' />
      <button type="button" role='presentation' className='date-next' />
    </div>
  </div>
)

export default Sidebar