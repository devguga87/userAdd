import React from 'react';
import styled from './Card.module.css'

const Card = ({className, children}) => {
  return(
    <div className={`${styled.card} ${className}`}>
      {children}
    </div>
  )
}

export default Card;