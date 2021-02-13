import React from 'react';

export const Recipe = (props) => {
  const { recipe } = props

  return (
    <div>
      <li>
        <a
          href={recipe.recipeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {recipe.recipeTitle}
        </a>
      </li>
    </div>
  )
}
