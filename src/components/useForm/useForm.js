import { useContext, useState } from 'react';
import formValidation from './formValidation';
import StateContext from '../state-context/state-context';

const useForm = () => {
  const stateCtx = useContext(StateContext);
  const [bookmarks, setBookmarks] = stateCtx.setBookmarks;
  const [allRecipes, setAllRecipes] = stateCtx.allRecipiesState;

  const [error, setError] = useState([]);

  const initialState = {
    id: '',
    title: '',
    sourceUrl: '',
    imageUrl: '',
    publisher: '',
    cookingTime: '',
    servings: '',
    ingredient1: '',
    ingredient2: '',
    ingredient3: '',
    ingredient4: '',
    ingredient5: '',
    ingredient6: '',
  };

  const [recipeForm, setRecipeForm] = useState(initialState);

  const handleChange = (e) => {
    setRecipeForm({
      ...recipeForm,
      id: `${Date.now()}`,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // const changeIngredientsToArr = Object.entries(recipeForm)
    //   .filter((entry) => entry[0].startsWith('ingredient') && entry[1] !== '')
    //   .map((ing) => {
    //     const [quantity, unit, description] = ing[1]
    //       .replaceAll(' ', '')
    //       .split(',');
    //     return { quantity: quantity ? +quantity : null, unit, description };
    //   });
    // setRecipeForm((prevData) => ({
    //   ...prevData,
    //   ingredients: changeIngredientsToArr,
    // }));
    // const recipeNotIngredients = recipeForm.filter((entry) =>
    //   console.log(entry)
    // );
    // console.log(changeIngredientsToArr());
    setError(formValidation(recipeForm));
    setBookmarks((prevData) => [...prevData, recipeForm]);
    setAllRecipes((prevData) => [recipeForm, ...prevData]);
    setRecipeForm(initialState);
    // console.log(recipeForm);
  };

  return { handleChange, recipeForm, handleFormSubmit, error };
};

export default useForm;
