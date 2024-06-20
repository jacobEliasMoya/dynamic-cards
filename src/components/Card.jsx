import React from 'react'
import Button from '../components/Button'

function Card(props) {


  return (
    <div className={props.cardClass}>
      <div className="card">

        <h2>{props.cardTitle}</h2>

        <p>{props.cardText}</p>

        <Button 
          buttonClass='btn'
          buttonText='Learn More'
          buttonLink='https://jacobmoya.com/'
        />
        

      </div>
    </div>
  )
}

export default Card

