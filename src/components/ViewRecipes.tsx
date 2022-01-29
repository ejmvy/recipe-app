import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addNewRecipe } from "../redux/recipeSlice";
import { RootState } from "../redux/store";
import { RecipeState } from "../types";
import PopupDialog from "./PopupDialog";
import RecipeCard from "./RecipeCard";


const ViewRecipes = () => {

  const [showButtons, setShowButtons] = useState(false);
  
  const recipes = useSelector((state: RootState) => state.recipe.recipeList);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const addRecipe = (recipe: RecipeState) => {
    dispatch(addNewRecipe(recipe))
  }



  const openRecipe = (recipeId: RecipeState['id']) => {
    console.log('open rec', recipeId);
    navigate(`/view/${recipeId}`);
  }


  
  console.log('recipes', recipes);

  return (

    <Flex h='80vh' >
      <Flex w='40%' flexDirection='column' justifyContent='center'>
        { !showButtons && <Button onClick={() => setShowButtons(true)} colorScheme='teal' w='70%' mx='auto'>Add New</Button> }
        { showButtons && <Stack direction='row' spacing={4} align='center' mx='auto'>
          <PopupDialog onAdd={addRecipe}/>
          <Button variant='outline' colorScheme='teal'>Create New</Button>
        </Stack> }

      </Flex>
        <Flex w='60%' px={5} h='80vh' overflow='auto' flexDirection='column' alignItems='center'>
            { recipes.length && 
              recipes.map((recipe: RecipeState, idx: number) => <RecipeCard onOpen={openRecipe} recipeInfo={recipe} key={idx} />)
            }
            { !recipes.length && <Text color='teal.300'>You have no recipes!</Text>}
        </Flex>

    </Flex>
  )
}


export default ViewRecipes;