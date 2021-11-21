import React, { useState, useContext } from 'react';
// import Icons from '../img/icons.svg';
// import SearchIcon from '../svg-props/SearchIcon';
import StateContext from '../state-context/state-context';

const Form = () => {
  const [recipeInput, setRecipeInput] = useState('');

  const stateCtx = useContext(StateContext);

  const [userInputedName, setUserInputedName] = stateCtx.inputtedRecipeName;

  const recipeInputHnadler = (e) => {
    setRecipeInput(e.target.value);
  };

  const recipeSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(recipeName);
    setUserInputedName(recipeInput);
    setRecipeInput('');
  };
  return (
    <form className='search' onSubmit={recipeSubmitHandler}>
      <input
        value={recipeInput}
        type='text'
        className='search__field'
        placeholder='Search over 1,000,000 recipes...'
        onChange={recipeInputHnadler}
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
