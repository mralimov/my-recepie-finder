import React, { useState } from 'react';
import Header from './header/Header';
import './App.scss';
import SearchResult from './searchResults/SearchResult';
import Recipe from './recipe/Recipe';
import { ReactQueryDevtools } from 'react-query/devtools';

import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  const [recipeName, setRecipeName] = useState('');
  const [recipeData, setRecipeData] = useState([]);

  return (
    <QueryClientProvider client={queryClient}>
      <Header recipeName={recipeName} setRecipeName={setRecipeName} />
      <SearchResult
        recipeName={recipeName}
        recipeData={recipeData}
        setRecipeData={setRecipeData}
      />
      <Recipe recipe={recipeData} />
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
};

export default App;
