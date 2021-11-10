import { createContext, useEffect, useState } from 'react';

const StateContext = createContext({
  allRecipes: [],
  bookmarks: [],
  currentRecipeId: '',
  inputtedRecipeName: '',
});

export const StateContextProvider = (props) => {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    get(`/${currentRecipe}?key=${KEY}`)
      .then((data) => {
        // console.log(data.data.recipe);
        const { recipe } = data.data;
        setAllRecipes(recipe);
      })
      .catch((err) => console.log(err));
  }, [currentRecipe]);

  const bookmarkHandler = () => {
    let checkRecipe =
      bookmark.filter((item) => item.id === currentRecipe).length <= 0;

    let bookmarkData = recipe.filter((item) => item.id === currentRecipe);

    if (checkRecipe) {
      setBookmark((prevData) => [...prevData, ...bookmarkData]);
    } else {
      let filterBookmark = bookmark.filter((item) => item.id !== currentRecipe);

      setBookmark([...filterBookmark]);
    }
  };
  return (
    <StateContext.Provider
      value={{
        allRecipes: allRecipes,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
};

export default StateContext;
