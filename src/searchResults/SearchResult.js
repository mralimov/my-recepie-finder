import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch/UseFetch';
import Loader from '../Loader';
import RecipeList from './RecipeList';

const SearchResult = ({ recipeName, recipeData, setRecipeData }) => {
  const KEY = 'ffa960fd-e870-4fb9-b79d-f2d19c62463c';

  const { get, loading } = useFetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?`
  );
  useEffect(() => {
    get(`search=${recipeName}&key=${KEY}`)
      .then((data) => setRecipeData(data.data.recipes))
      .catch((err) => console.log(err));
  }, [recipeName]);

  console.log(recipeData);
  return (
    <div className='search-results'>
      <ul className='results'>
        {loading && <Loader />}
        {/* <!--  ffa960fd-e870-4fb9-b79d-f2d19c62463c
       
           --> */}
        {recipeData.map((recipe) => {
          return <RecipeList key={recipe.id} recipe={recipe} />;
        })}
      </ul>

      <div className='pagination'>
        {/* <button className="btn--inline pagination__btn--prev">
            <svg className="search__icon">
              <use href="src/img/icons.svg#icon-arrow-left"></use>
            </svg>
            <span>Page 1</span>
          </button>
          <button className="btn--inline pagination__btn--next">
            <span>Page 3</span>
            <svg className="search__icon">
              <use href="src/img/icons.svg#icon-arrow-right"></use>
            </svg>
          </button> */}
      </div>

      <p className='copyright'>
        &copy; Copyright by
        <a
          className='twitter-link'
          target='_blank'
          href='https://twitter.com/jonasschmedtman'
        >
          Jonas Schmedtmann
        </a>
        . Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own.
      </p>
    </div>
  );
};

export default SearchResult;
