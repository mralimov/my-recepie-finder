import React, { useEffect, useContext, useState } from 'react';
import useFetch from '../useFetch/UseFetch';
import Loader from '../Loader';
import RecipeList from './RecipeList';
import PaginationButton from './PaginationButton';
import { KEY, BASE_URL } from '../config';
import RecipeContext from '../state-context/RecipeContext';

const SearchResult = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [arrayLength, setArrayLength] = useState(0);

  const stateCtx = useContext(RecipeContext);
  const { userInputedName, bookmarks, allRecipes } = stateCtx;

  console.log(userInputedName);

  // const [allRecipes, setAllRecipes] = stateCtx.allRecipiesState;
  // const [bookmarks, setBookmarks] = stateCtx.setBookmarks;
  // const [userInputedName, setUserInputedName] = stateCtx.inputtedRecipeName;
  // console.log(userInputedName);
  // console.log(allRecipes);

  let start = (currentPage - 1) * 10;
  let end = currentPage * 10;
  let maxPages = Math.ceil(arrayLength / 10);

  const { get, loading } = useFetch(BASE_URL);
  // useEffect(() => {
  //   if (!userInputedName) return;

  //   get(`?search=${userInputedName}&key=${KEY}`)
  //     .then((data) => {
  //       console.log(data);
  //       const { recipes } = data.data;
  //       setArrayLength(recipes.length);
  //       // setAllRecipes([...bookmarks, ...recipes]);
  //       console.log(recipes);
  //     })
  //     .catch((err) => console.log(err));
  //   setCurrentPage(1);
  // }, [userInputedName, bookmarks]);

  return (
    <div className='search-results'>
      {loading && <Loader />}

      <ul className='results'>
        {allRecipes &&
          allRecipes.slice(start, end).map((recipe, i) => {
            return (
              <RecipeList
                key={i + 222}
                recipe={recipe}
                currentRecipeName={userInputedName}
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
