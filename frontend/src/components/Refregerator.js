import React, { useEffect, useState } from 'react';
import {Food} from './Food';

export const Refregerator = () => {
  const [foodsInRefregerator, setFoodsInRefregerator] = useState([])

  useEffect(() => {
    fetchFoodsInRefregeratorData();
  }, [])

  const fetchFoodsInRefregeratorData = () => {
    fetch('http://localhost:3000/foods')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setFoodsInRefregerator(data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <>
      <h2>冷蔵庫</h2>
      <ul>
        {foodsInRefregerator.map(food =>
          <Food food={food} />
        )}
      </ul>
    </>
  )
};
