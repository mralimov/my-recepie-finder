import React from 'react';
// import Icons from '../img/icons.svg';
const RecipeIngredients = ({ ingredients, title }) => {
  return (
    <div className='recipe__ingredients'>
      <h2 className='heading--2'>Recipe ingredients</h2>
      <ul className='recipe__ingredient-list'>
        {ingredients.map((ingredient, i) => {
          const { quantity, unit, description } = ingredient;

          return (
            <li
              key={i + Math.floor(Math.random() * 444)}
              className='recipe__ingredient'
            >
              {/* <svg className='recipe__icon'>
                <use href={Icons + '#icon-check'}></use>
              </svg> */}
              <div className='recipe__quantity'>{quantity}</div>
              <div className='recipe__description'>
                <span className='recipe__unit'>{unit}</span>
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
