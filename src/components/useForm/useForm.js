import { useEffect, useState } from 'react';
import formValidation from './formValidation';

const useForm = () => {
  const [error, setError] = useState([]);
  const [addedRecipes, setAddedRecipes] = useState([]);
  const initialState = {
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
    // const { name, value } = e.taget;

    console.log(e.target.name);
    setRecipeForm({
      ...recipeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setAddedRecipes((prevData) => [...prevData, recipeForm]);
    setError(formValidation(recipeForm));
    setRecipeForm(initialState);
    console.log(recipeForm);
    console.log(addedRecipes);
  };

  return { handleChange, recipeForm, handleFormSubmit, error };
};

export default useForm;
