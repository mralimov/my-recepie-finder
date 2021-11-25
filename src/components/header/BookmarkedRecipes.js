import React from 'react';

const BookmarkedRecipes = ({ bookmarkedRecipe }) => {
  const { image_url, title, publisher } = bookmarkedRecipe;

  return (
    <li className='preview'>
      <a className='preview__link' href='#23456'>
        <figure className='preview__fig'>
          <img src={image_url} alt={title} />
        </figure>
        <div className='preview__data'>
          <h4 className='preview__name'>{title}</h4>
          <p className='preview__author'>{publisher}</p>
        </div>
      </a>
    </li>
  );
};

export default BookmarkedRecipes;
