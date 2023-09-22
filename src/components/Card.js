import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <hr />
        <img src={props.img} alt={props.descricao}></img>
        <h3>{props.h3}</h3>
        <p>{props.curso}</p>
    </div>
  )
}
