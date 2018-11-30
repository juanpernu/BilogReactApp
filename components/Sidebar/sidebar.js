import React from 'react'

// **
// import styles
// **
import "./sidebar.scss"

const Sidebar = ({ name, day}) => (
  <div className='sidebar'>
    <div className='date'>
      <p className='date-day'>Viernes</p>
      <p className='date-day-number'>05 de Octubre</p>
    </div>
    <div className='date-nav'>
      <button type="button" role='presentation' className='date-prev' />
      <button type="button" role='presentation' className='date-next' />
    </div>
    <h2>Bienvenido a tu agenda, Juan</h2>
    <p>Acá vas a poder gestionar todos tus turnos.</p>
  </div>
)

export default Sidebar