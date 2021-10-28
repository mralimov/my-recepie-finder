import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch/UseFetch';
import Loader from '../Loader';
import RecipeList from './RecipeList';
import PaginationButton from './PaginationButton';
import { KEY, BASE_URL } from '../config';

const SearchResult = ({
  recipeName,
  recipeData,
  setRecipeData,
  setCurrentRecipe,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayLength, setArrayLength] = useState(0);

  let start = (currentPage - 1) * 10;
  let end = currentPage * 10;
  let maxPages = Math.ceil(arrayLength / 10);

  const { get, loading } = useFetch(BASE_URL);

  useEffect(() => {
    get(`?search=${recipeName}&key=${KEY}`)
      .then((data) => {
        const { recipes } = data.data;
        setArrayLength(recipes.length);
        setRecipeData(recipes);
        console.log(recipes);
      })
      .catch((err) => console.log(err));
    setCurrentPage(1);
  }, [recipeName]);

  return (
    <div className='search-results'>
      {loading && <Loader />}

      <ul className='results'>
        {recipeData.slice(start, end).map((recipe) => {
          return (
            <RecipeList
              key={recipe.id}
              recipe={recipe}
              setCurrentRecipe={setCurrentRecipe}
            />
          );
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
