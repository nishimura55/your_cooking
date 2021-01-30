import React from 'react';
import { findDOMNode } from 'react-dom';

export const Food = (props) => {
  const { food, destroyFood } = props

  return (
    <li style={{marginTop: "20px"}}>
      <span>{food.name}</span>
      <button onClick={destroyFood} id={food.id} style={{color: "red", marginLeft: "5px"}}>捨てる</button>
    </li>
  )
};
