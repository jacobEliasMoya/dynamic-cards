import React from 'react';

function Button(props) {

  return (
    <a className={props.buttonClass} href={props.buttonLink} onClick={props.clickFunction}> {props.buttonText} </a> 
  )
}

export default Button
