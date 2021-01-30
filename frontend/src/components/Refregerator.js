import React, { useEffect, useState } from 'react';
import {InputArea} from './InputArea';
import {Food} from './Food';

export const Refregerator = () => {
  const [foodsInRefregerator, setFoodsInRefregerator] = useState([])
  const [foodForputInRefregerator, setFoodForputInRefregerator] = useState("")
  const [errorMessage, setErrorMessage] = useState("")

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
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response.json()
      })
      .then(data => {
        if (data.error_message) {
          setErrorMessage(data.error_message)
        } else {
          setFoodsInRefregerator(prevVal => {
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

  const destroyFood = (e) => {
    const targetId = parseInt(e.target.id, 10)
    fetch(`http://localhost:3000/foods/${targetId}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        setFoodsInRefregerator(prevVal => prevVal.filter(val => val.id !== targetId))
      })
      .catch(error => {
        console.log(`destroyFoodでエラー発生！ ${error}`)
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
       errorMessage={errorMessage}
      />
      <ul>
        {foodsInRefregerator.map(food =>
          <Food
            food={food}
            destroyFood={destroyFood}
          />
        )}
      </ul>
    </>
  )
};
