import { configureStore } from "@reduxjs/toolkit";
import { recipeList } from "./recipeList";

export const store = configureStore({
  reducer: {
    recipe: recipeList.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
