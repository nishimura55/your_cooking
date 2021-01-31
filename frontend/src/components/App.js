import React, { useState } from 'react';
import {Header} from './Header';
import {Refregerator} from './Refregerator';
import {Kitchin} from './Kitchin';

export const App = () => {
  const [foodsInRefregerator, setFoodsInRefregerator] = useState([])
  const [foodsInKitchin, setFoodsInKitchin] = useState([])

  const moveFood = (inRefregerator, targetId) => {
    if (inRefregerator) {
      const target = foodsInRefregerator.find(val => val.id === targetId)
      setFoodsInRefregerator(prevVal => prevVal.filter(val => val !== target))
      setFoodsInKitchin(prevVal => [...prevVal, target])
    } else {
      const target = foodsInKitchin.find(val => val.id === targetId)
      setFoodsInKitchin(prevVal => prevVal.filter(val => val !== target))
      setFoodsInRefregerator(prevVal => [...prevVal, target])
    }
  }

  const returnAllFoods = () => {
    setFoodsInRefregerator((prevVal) => [...prevVal, ...foodsInKitchin])
    setFoodsInKitchin([])
  }

  return (
    <>
      <div className="main-area">
        <Header />
        <Refregerator
          foods={foodsInRefregerator}
          setFoods={setFoodsInRefregerator}
          moveFood={moveFood}
        />
        <Kitchin
          foods={foodsInKitchin}
          setFoods={setFoodsInKitchin}
          moveFood={moveFood}
          returnAllFoods={returnAllFoods}
        />
      </div>
    </>
  )
};
