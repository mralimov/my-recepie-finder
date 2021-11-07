import React, { useState } from 'react';
// import Icons from '../img/icons.svg';

const RecipeList = ({ recipe, currentRecipe, setCurrentRecipe }) => {
  const { image_url, publisher, title, id } = recipe;

  const recipeClickHandler = () => {
    setCurrentRecipe((prevData) => (prevData = id));
    console.log(currentRecipe);
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
