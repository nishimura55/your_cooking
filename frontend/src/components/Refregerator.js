import React from 'react';
import {Food} from './Food';

export const Refregerator = () => {
  const foodsInRefregerator = [
    { 'name': '白菜' },
    { 'name': 'にんじん' },
  ]

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
