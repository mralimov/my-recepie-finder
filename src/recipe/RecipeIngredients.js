import React from 'react';
import Icons from '../img/icons.svg';
const RecipeIngredients = ({ ingredients, key }) => {
  return (
    <div class='recipe__ingredients'>
      <h2 class='heading--2'>Recipe ingredients</h2>
      <ul class='recipe__ingredient-list'>
        {ingredients.map((ingredient) => {
          const { quantity, unit, description } = ingredient;

          return (
            <li key={key} class='recipe__ingredient'>
              <svg class='recipe__icon'>
                <use href={Icons + '#icon-check'}></use>
              </svg>
              <div class='recipe__quantity'>{quantity}</div>
              <div class='recipe__description'>
                <span class='recipe__unit'>{unit}</span>
                {description}
              </div>
            </li>
          );
        })}

        {/* <li class='recipe__ingredient'>
            <svg class='recipe__icon'>
              <use href='src/img/icons.svg#icon-check'></use>
            </svg>
            <div class='recipe__quantity'>0.5</div>
            <div class='recipe__description'>
              <span class='recipe__unit'>cup</span>
              ricotta cheese
            </div>
          </li> */}
      </ul>
    </div>
  );
};

export default RecipeIngredients;
