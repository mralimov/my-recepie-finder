export default function formValidation(formIngredients) {
  let error = {};

  if (!formIngredients.title.trim()) error.title = 'Title required';

  if (!formIngredients.sourceUrl) error.sourceUrl = 'Source URL required';

  if (!formIngredients.imageUrl) error.imageUrl = 'Image URL required';

  if (!formIngredients.publisher) error.publisher = 'Publisher required';

  if (!formIngredients.prepTime) error.prepTime = 'Preptime required';

  if (!formIngredients.servings) error.servings = 'Servings required';

  if (!formIngredients.ingredients1)
    error.ingredients1 = 'Ingredients required';

  if (!formIngredients.ingredients2)
    error.ingredients2 = 'Ingredients required';

  //   if (!formIngredients.ingredients3) error.ingredients3 = ' required';

  //   if (!formIngredients.ingredients4) error.ingredients4 = ' required';

  //   if (!formIngredients.ingredients5) error.ingredients5 = ' required';

  //   if (!formIngredients.ingredients6) error.ingredients6 = ' required';

  return error;
}
