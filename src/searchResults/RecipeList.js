import React from 'react';

const RecipeList = ({ recipe }) => {
  const { image_url, publisher, title } = recipe;
  return (
    <>
      <li className='preview'>
        <a className='preview__link preview__link--active' href='#23456'>
          <figure className='preview__fig'>
            <img src={image_url} alt='Test' />
          </figure>
          <div className='preview__data'>
            <h4 className='preview__title'>{title}</h4>
            <p className='preview__publisher'>{publisher}</p>
            <div className='preview__user-generated'>
              <svg>
                <use href='src/img/icons.svg#icon-user'></use>
              </svg>
            </div>
          </div>
        </a>
      </li>
    </>
  );
};

export default RecipeList;
