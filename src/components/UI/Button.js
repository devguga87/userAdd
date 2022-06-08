import React from 'react';
import styled from './Button.module.css'

const Button = ({children}) => {
  return(
    <button className={styled.button}>{children}</button>
  )
}

export default Button