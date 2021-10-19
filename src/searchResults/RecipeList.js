import React, { useState } from 'react';
import RecipeListDetails from './RecipeListDetails';
const RecipeList = ({ recipes, currentPage }) => {
  const [tenRecipes, setTenRecipes] = useState(null);
  let start = (currentPage - 1) * 10;
  let end = currentPage * 10;
  //   function getTenRecipies(data, page) {
  //     const start = (page - 1) * 10;
  //     const end = page * 10;
  //     return setTenRecipes(data.slice(start, end));
  //   }
  //   if (recipes) return getTenRecipies(recipes, currentPage);
  //   console.log(recipes.slice(start, end));
  return (
    <>
      {recipes.map((recipe) => {
        return <RecipeListDetails key={recipe.id} recipe={recipe} />;
      })}
    </>
  );
};

export default RecipeList;
