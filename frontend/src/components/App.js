import React, {useState} from 'react';
import {Header} from './Header';
import {Refregerator} from './Refregerator';
import {Kitchin} from './Kitchin';
import {RecipeList} from './RecipeList';

export const App = () => {
  const [foodsInRefregerator, setFoodsInRefregerator] = useState([])
  const [foodsInKitchin, setFoodsInKitchin] = useState([])
  const [recipes, setRecipes] = useState([])
  const [currentFood, setCurrentFood] = useState([])

  const fetchRecipes = (target) => {
    fetch(`http://localhost:3000/foods/${target.id}/get_recipes`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setRecipes(data)
        setCurrentFood(target)
      })
      .catch(error => {
        console.log(`fetchRecipesでエラー発生！ ${error}`)
      }
    )
  }

  const moveFood = (inRefregerator, targetId) => {
    if (inRefregerator) {
      const target = foodsInRefregerator.find(val => val.id === targetId)
      setFoodsInRefregerator(prevVal => prevVal.filter(val => val !== target))
      setFoodsInKitchin(prevVal => [...prevVal, target])
      fetchRecipes(target)
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
      <RecipeList
        recipes={recipes}
        food={currentFood}
      />
    </div>
  )
};
