import React from 'react';
import {Recipe} from './Recipe';

export const RecipeList = (props) => {
  const { recipes, food } = props

  return (
    <div className="recipe-list-area box">
      <h2 className="title">
        {food.name && `${food.name}の`}レシピ
      </h2>
      <ul>
        {recipes.map(recipe =>
          <Recipe recipe={recipe}/>
        )}
      </ul>
    </div>
  )
}
