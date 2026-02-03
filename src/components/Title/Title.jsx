import React from 'react'
import './Title.css'
export default function Tile(props) {
  return (
    <div className='title'>
      <h2>{props.subtitle}</h2>
      <p>{props.title}</p>
    </div>
  )
}
