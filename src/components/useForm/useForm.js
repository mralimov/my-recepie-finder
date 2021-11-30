import { useContext, useState } from 'react';
import formValidation from './formValidation';
import StateContext from '../state-context/state-context';

const useForm = () => {
  const stateCtx = useContext(StateContext);
  const [bookmarks, setBookmarks] = stateCtx.setBookmarks;

  const [error, setError] = useState([]);

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
    setRecipeForm({
      ...recipeForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setBookmarks((prevData) => [...prevData, recipeForm]);
    setError(formValidation(recipeForm));
    setRecipeForm(initialState);
    console.log(recipeForm);
  };

  return { handleChange, recipeForm, handleFormSubmit, error };
};

export default useForm;
