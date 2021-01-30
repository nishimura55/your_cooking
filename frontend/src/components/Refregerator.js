import React, { useEffect, useState } from 'react';
import {InputArea} from './InputArea';
import {Food} from './Food';

export const Refregerator = () => {
  const [foodsInRefregerator, setFoodsInRefregerator] = useState([])
  const [foodForputInRefregerator, setFoodForputInRefregerator] = useState("")

  useEffect(() => {
    fetchFoodsInRefregeratorData()
  }, [])

  const fetchFoodsInRefregeratorData = () => {
    fetch("http://localhost:3000/foods")
      .then(response => response.json())
      .then(data => setFoodsInRefregerator(data))
      .catch(error => {
        console.log(`fetchFoodsInRefregeratorDataでエラー発生！ ${error}`)
      }
    )
  }

  const putInRefregerator = (e) => {
    e.preventDefault()
    fetch("http://localhost:3000/foods", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        food: {
          name: foodForputInRefregerator
        }
      }),
    })
      .then(response => {
        if(!response.ok) {
          throw Error(response.statusText)
        }
        setFoodsInRefregerator(prevVal => {
          const newVal = foodForputInRefregerator
          setFoodForputInRefregerator("")
          return [...prevVal, newVal]
        })
      })
      .catch(error => {
        console.log(`putInRefregeratorでエラー発生！ ${error}`)
      }
    )
  }

  return (
    <>
      <h2>冷蔵庫</h2>
      <InputArea
       handlSubmit={putInRefregerator}
       inputText={foodForputInRefregerator}
       handlInputText={setFoodForputInRefregerator}
      />
      <ul>
        {foodsInRefregerator.map(food =>
          <Food food={food} />
        )}
      </ul>
    </>
  )
};
