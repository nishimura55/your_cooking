import React, { useEffect, useState } from 'react';
import {InputArea} from './InputArea';
import {Food} from './Food';

export const Refregerator = (props) => {
  const { foods, setFoods, moveFood } = props

  const [foodForputInRefregerator, setFoodForputInRefregerator] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    fetchFoodsInRefregeratorData()
  }, [])

  const fetchFoodsInRefregeratorData = () => {
    fetch("http://localhost:3000/foods")
      .then(response => response.json())
      .then(data => setFoods(data))
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
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then(data => {
        if (data.error_message) {
          setErrorMessage(data.error_message)
        } else {
          setFoods(prevVal => {
            setFoodForputInRefregerator("")
            setErrorMessage("")
            return [...prevVal, data]
          })
        }
      })
      .catch(error => {
        console.log(`putInRefregeratorでエラー発生！ ${error}`)
      }
    )
  }

  return (
    <div className="refregerator-area box">
      <h2 className="title">冷蔵庫</h2>
      <InputArea
       handlSubmit={putInRefregerator}
       inputText={foodForputInRefregerator}
       handlInputText={setFoodForputInRefregerator}
       errorMessage={errorMessage}
      />
      <ul>
        {foods.map(food =>
          <Food
            food={food}
            setFoods={setFoods}
            moveFood={moveFood}
            inRefregerator={true}
          />
        )}
      </ul>
    </div>
  )
};
