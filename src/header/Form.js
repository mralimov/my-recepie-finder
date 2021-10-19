import React, { useState } from 'react';

const Form = ({ recipeName, setRecipeName }) => {
  const [recipeInput, setRecipeInput] = useState('');
  const recipeInputHnadler = (e) => {
    setRecipeInput(e.target.value);
  };

  const recipeSubmitHandler = (e) => {
    e.preventDefault();
    console.log(recipeName);
    setRecipeName(recipeInput);
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
        <svg className='search__icon'>
          <use href='../img/icons.svg#icon-search'></use>
        </svg>
        <span>Search</span>
      </button>
    </form>
  );
};

export default Form;
