import React, { useState, useContext } from 'react';
import StateContext from '../state-context/RecipeContext';
import useForm from '../useForm/useForm';
import formValidation from '../useForm/formValidation';

const AddRecipe = () => {
  // const stateCtx = useContext(StateContext);

  const { handleChange, recipeForm, handleFormSubmit } = useForm();

  // const [addRecipeClicked, setAddRecipeClicked] = stateCtx.addRecipeClicked;

  const [addRecipeClicked, setAddRecipeClicked] = useState(false);
  return (
    <>
      <div
        className={`overlay ${!addRecipeClicked ? 'hidden' : ''}`}
        onClick={() => setAddRecipeClicked(false)}
      ></div>
      <div className={`add-recipe-window ${!addRecipeClicked ? 'hidden' : ''}`}>
        <button
          className='btn--close-modal'
          onClick={() => setAddRecipeClicked(false)}
        >
          &times;
        </button>
        <form className='upload' onSubmit={handleFormSubmit}>
          <div className='upload__column'>
            <h3 className='upload__heading'>Recipe data</h3>
            <label htmlFor='form-title'>Title</label>
            <input
              required
              name='title'
              type='text'
              placeholder='title of the recipe'
              value={recipeForm.title}
              onChange={handleChange}
            />
            <label>URL</label>
            <input
              required
              name='sourceUrl'
              type='text'
              placeholder='sourceUrl'
              value={recipeForm.sourceUrl}
              onChange={handleChange}
            />
            <label>Image URL</label>
            <input
              required
              name='imageUrl'
              type='text'
              placeholder='www.imageURL.com'
              value={recipeForm.imageUrl}
              onChange={handleChange}
            />
            <label>Publisher</label>
            <input
              required
              name='publisher'
              type='text'
              placeholder='publisher name'
              value={recipeForm.publisher}
              onChange={handleChange}
            />
            <label>Prep time</label>
            <input
              required
              name='cookingTime'
              type='number'
              placeholder='90 minutes'
              value={recipeForm.cookingTime}
              onChange={handleChange}
            />
            <label>Servings</label>
            <input
              required
              name='servings'
              type='number'
              placeholder='6 people'
              value={recipeForm.servings}
              onChange={handleChange}
            />
          </div>

          <div className='upload__column'>
            <h3 className='upload__heading'>Ingredients</h3>
            <label>Ingredient 1</label>
            <input
              type='text'
              required
              name='ingredient1'
              placeholder='Format: 0.5,kg,Quantity,Unit,Description'
              value={recipeForm.ingredient1}
              onChange={handleChange}
            />
            <label>Ingredient 2</label>
            <input
              type='text'
              name='ingredient2'
              placeholder="Format: '1 Onion,Quantity,Unit,Description'"
              value={recipeForm.ingredient2}
              onChange={handleChange}
            />
            <label>Ingredient 3</label>
            <input
              type='text'
              name='ingredient3'
              placeholder="Format: '2 cups flower,Quantity,Unit,Description'"
              value={recipeForm.ingredient3}
              onChange={handleChange}
            />
            <label>Ingredient 4</label>
            <input
              type='text'
              name='ingredient4'
              placeholder="Format: 'Quantity,Unit,Description'"
              value={recipeForm.ingredient4}
              onChange={handleChange}
            />
            <label>Ingredient 5</label>
            <input
              type='text'
              name='ingredient5'
              placeholder="Format: 'Quantity,Unit,Description'"
              value={recipeForm.ingredient5}
              onChange={handleChange}
            />
            <label>Ingredient 6</label>
            <input
              type='text'
              name='ingredient6'
              placeholder="Format: 'Quantity,Unit,Description'"
              value={recipeForm.ingredient6}
              onChange={handleChange}
            />
          </div>

          <button className='btn upload__btn'>
            <svg>
              <use href='src/img/icons.svg#icon-upload-cloud'></use>
            </svg>
            <span>Upload</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default AddRecipe;
