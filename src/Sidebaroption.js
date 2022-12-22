import React from 'react'
import './sidebaroption.css'

function Sidebaroption({active,Icon,text}) {
  return (
    <div className={`sidebaroption ${active && 'sideoption--active'}`}>
        <Icon />
        <h2>{text}</h2>
        </div>
  )
}

export default Sidebaroption