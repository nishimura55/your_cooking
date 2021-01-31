import React from 'react';
import {Food} from './Food';

export const Kitchin = (props) => {
  const { foods, setFoods, moveFood, returnAllFoods } = props

  return (
    <div className="kitchin-area box">
      <h2 className="title">キッチン</h2>
      <button onClick={returnAllFoods}>全て戻す</button>
      <ul>
        {foods.map(food =>
          <Food
            food={food}
            setFoods={setFoods}
            moveFood={moveFood}
            inRefregerator={false}
          />
        )}
      </ul>
    </div>
  )
}
