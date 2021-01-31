import React from 'react';

export const Food = (props) => {
  const { food, setFoods, moveFood, inRefregerator } = props

  const destroyFood = (e) => {
    const targetId = parseInt(e.target.id, 10)
    fetch(`http://localhost:3000/foods/${targetId}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        setFoods(prevVal => prevVal.filter(val => val.id !== targetId))
      })
      .catch(error => {
        console.log(`destroyFoodでエラー発生！ ${error}`)
      }
    )
  }

  return (
    <li style={{marginTop: "20px"}}>
      <span>{food.name}</span>
      <button onClick={() => moveFood(inRefregerator, food.id)} id={food.id}>
        {inRefregerator ? "取り出す" : "戻す"}
      </button>
      <button onClick={destroyFood} id={food.id}>
        {inRefregerator ? "捨てる" : "使用済み"}
      </button>
    </li>
  )
};
