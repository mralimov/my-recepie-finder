import React, { useState, useContext } from 'react';
// import Icons from '../img/icons.svg';
import StateContext from '../state-context/state-context';

const RecipeList = ({ recipe }) => {
  const { image_url, publisher, title, id } = recipe;

  const stateCtx = useContext(StateContext);
  const [currentRecipeIngredients, setCurrentRecipeIngredients] =
    stateCtx.currentRecipeIngredients;
  const findCurrentRecipeIngredients = stateCtx.findCurrentIngredients;

  const recipeClickHandler = () => {
    setCurrentRecipeIngredients(findCurrentRecipeIngredients(id));
  };

  return (
    <>
      <li className='preview' key={id} onClick={recipeClickHandler}>
        <a className='preview__link preview__link--active' href='#23456'>
          <figure className='preview__fig'>
            <img src={image_url} alt='Test' />
          </figure>
          <div className='preview__data'>
            <h4 className='preview__title'>{title}</h4>
            <p className='preview__publisher'>{publisher}</p>
            <div className='preview__user-generated'>
              {/* <svg>
                <use xlinkHref={`${Icons}#icon-user`}></use>
              </svg> */}
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default RecipeList;
