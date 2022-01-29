export type RecipeState = {
  id: string;
  strMeal: string;
  strArea: string;
  strTags: string;
  strYoutube: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  [key: string | number]: string | number;
};

export type IngredientsType = {
  [key: string | number]: string | number;
};
