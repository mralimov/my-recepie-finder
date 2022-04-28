import React, { useState, useContext, useEffect } from 'react';
// import Icons from '../img/icons.svg';
// import SearchIcon from '../svg-props/SearchIcon';
import RecipeContext from '../state-context/RecipeContext';
import { KEY, BASE_URL } from '../config';
import useFetch from '../useFetch/UseFetch';

const Form = () => {
  const [recipeInput, setRecipeInput] = useState('');

  const { get, loading } = useFetch(BASE_URL);

  const stateCtx = useContext(RecipeContext);
  const { userInputedName } = stateCtx;

  useEffect(() => {
    if (!userInputedName) return;

    get(`?search=${userInputedName}&key=${KEY}`)
      .then((data) => {
        console.log(data);
        const { recipes } = data.data;
        // setArrayLength(recipes.length);
        // setAllRecipes([...bookmarks, ...recipes]);
        console.log(recipes);
      })
      .catch((err) => console.log(err));
    // setCurrentPage(1);
  }, [userInputedName]);

  const recipeInputHandler = (e) => {
    setRecipeInput(e.target.value);
  };

  const recipeSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(recipeInput);
    stateCtx.userInputedName = recipeInput;
    console.log(stateCtx.userInputedName);
    setRecipeInput('');
  };
  return (
    <form className='search' onSubmit={recipeSubmitHandler}>
      <input
        value={recipeInput}
        type='text'
        className='search__field'
        placeholder='Search over 1,000,000 recipes...'
        onChange={recipeInputHandler}
      />
      <button className='btn search__btn'>
        {/* <svg className='search__icon'>
          <use href={Icons + '#icon-search'}></use>
        </svg> */}
        {/* <SearchIcon /> */}
        <span>Search</span>
      </button>
    </form>
  );
};

export default Form;
