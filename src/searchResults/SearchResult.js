import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch/UseFetch';
import Loader from '../Loader';
import RecipeList from './RecipeList';

const SearchResult = ({ recipeName, recipeData, setRecipeData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayLength, setArrayLength] = useState(0);

  const KEY = 'ffa960fd-e870-4fb9-b79d-f2d19c62463c';

  let start = (currentPage - 1) * 10;
  let end = currentPage * 10;
  let maxPages = Math.ceil(arrayLength / 10);
  console.log(maxPages);
  console.log(start, end);
  const { get, loading } = useFetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?`
  );

  useEffect(() => {
    get(`search=${recipeName}&key=${KEY}`)
      .then((data) => {
        const { recipes } = data.data;
        setArrayLength(recipes.length);
        setRecipeData(recipes.slice(start, end));
        // console.log(data.data.recipes);
      })
      .catch((err) => console.log(err));
  }, [recipeName, currentPage]);

  console.log(recipeData);

  return (
    <div className='search-results'>
      <ul className='results'>
        {loading && <Loader />}
        {recipeData.map((recipe) => {
          return <RecipeList key={recipe.id} recipe={recipe} />;
        })}
        {/* {<RecipeList recipes={recipeData} currentPage={currentPage} />} */}
      </ul>

      <div className='pagination'>
        {currentPage > 1 && (
          <button
            className='btn--inline pagination__btn--prev'
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <svg className='search__icon'>
              <use href='src/img/icons.svg#icon-arrow-left'></use>
            </svg>
            <span>Page {currentPage}</span>
          </button>
        )}
        {currentPage < maxPages && (
          <button
            className='btn--inline pagination__btn--next'
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <span>Page {currentPage + 1}</span>
            <svg className='search__icon'>
              <use href='src/img/icons.svg#icon-arrow-right'></use>
            </svg>
          </button>
        )}
      </div>

      <p className='copyright'>
        &copy; Copyright by
        <a className='twitter-link' target='_blank' href='#'>
          Donnie Alimov{' '}
        </a>
        . Use for learning or your portfolio. Don't use to teach. Don't claim as
        your own.
      </p>
    </div>
  );
};

export default SearchResult;
