import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RecipeState } from "../types";
import { RootState } from "./store";

type initialStateType = {
  recipeList: RecipeState[];
};

const recipeList: RecipeState[] = [];

const initialState: initialStateType = {
  recipeList,
};

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    addNewRecipe: (state, action: PayloadAction<RecipeState>) => {
      state.recipeList.push(action.payload);
    },
    updateRecipe: (state, action: PayloadAction<RecipeState>) => {
      // const
      // state.recipeList.push(action.payload);
    },
    deleteRecipe: (state, action: PayloadAction<{ id: string }>) => {
      state.recipeList = state.recipeList.filter(
        (recipe) => recipe.id !== action.payload.id
      );
    },
  },
});

export const { addNewRecipe, updateRecipe, deleteRecipe } = recipeSlice.actions;
export const selectRecipeList = (state: RootState) => state.recipe.recipeList;

export default recipeSlice.reducer;
