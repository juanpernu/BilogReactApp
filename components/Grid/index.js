import React from 'react'

// **
// import styles
// **
import "./grid.scss"

const Grid = ({}) => (
  <div className='grid'>
    <div className='grid-row'>
      <label>00:00</label>
      <label>Celeste Fantini Ortiz</label>
      <label className='presentism pre'>PRE</label>
      <div className='obervations'>
        <label className='obervations-title'>OBSERVACIONES</label>
        <label className='obervations-description'>Control de implantes</label>
      </div>
    </div>
    <div className='grid-row'>
      <label>00:00</label>
      <label>Celeste Fantini Ortiz</label>
      <label className='presentism cancel'>PRE</label>
      <div className='obervations'>
        <label className='obervations-title'>OBSERVACIONES</label>
        <label className='obervations-description'>Control de implantes</label>
      </div>
    </div>
    <div className='grid-row'>
      <label>00:00</label>
      <label>Celeste Fantini Ortiz</label>
      <label className='presentism aus-ca'>PRE</label>
      <div className='obervations'>
        <label className='obervations-title'>OBSERVACIONES</label>
        <label className='obervations-description'>Control de implantes</label>
      </div>
    </div>
    <div className='grid-row'>
      <label>00:00</label>
      <label>Celeste Fantini Ortiz</label>
      <label className='presentism aus-sa'>PRE</label>
      <div className='obervations'>
        <label className='obervations-title'>OBSERVACIONES</label>
        <label className='obervations-description'>Control de implantes</label>
      </div>
    </div>
  </div>
)

export default Grid