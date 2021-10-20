import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch/UseFetch';
import Loader from '../Loader';
import RecipeList from './RecipeList';
import PaginationButton from './PaginationButton';

const SearchResult = ({ recipeName, recipeData, setRecipeData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayLength, setArrayLength] = useState(0);

  const KEY = 'ffa960fd-e870-4fb9-b79d-f2d19c62463c';

  let start = (currentPage - 1) * 10;
  let end = currentPage * 10;
  let maxPages = Math.ceil(arrayLength / 10);

  const { get, loading } = useFetch(
    `https://forkify-api.herokuapp.com/api/v2/recipes?`
  );

  useEffect(() => {
    get(`search=${recipeName}&key=${KEY}`)
      .then((data) => {
        const { recipes } = data.data;
        setArrayLength(recipes.length);
        setRecipeData(recipes.slice(start, end));
      })
      .catch((err) => console.log(err));
  }, [recipeName, currentPage]);

  return (
    <div className='search-results'>
      <ul className='results'>
        {loading && <Loader />}
        {recipeData.map((recipe) => {
          return <RecipeList key={recipe.id} recipe={recipe} />;
        })}
      </ul>

      <PaginationButton
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        maxPages={maxPages}
      />

      <p className='copyright'>
        &copy; Copyright by Donnie Alimov
        <a className='twitter-link' target='_blank' href='#'>
          {' '}
        </a>
      </p>
    </div>
  );
};

export default SearchResult;
