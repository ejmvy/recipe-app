import { StarIcon, SunIcon, TimeIcon } from "@chakra-ui/icons";
import { Flex, Icon, Image, Tab, Table, TabList, TabPanel, TabPanels, Tabs, Tbody, Td, Text, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../redux/store";
import { IngredientsType, RecipeState } from "../types";

const ViewRecipeDetails = () => {

  const { id } =  useParams<{ id: string }>();

  const recipeList = useSelector((state: RootState) => state.recipe.recipeList);
  const recipe: RecipeState | undefined = recipeList.find((recipe => recipe.id === id));

  const instructions: string[] | undefined = recipe?.strInstructions.split('\r\n\r\n');

  const mainIngredients: IngredientsType = {};

  const ingredients = () => {
    console.log('recipe', recipe);
    for (let i = 1; i <= 20; i++) {
      if (recipe && recipe[`strIngredient${i}`]) {
        mainIngredients[recipe[`strMeasure${i}`]] = (recipe[`strIngredient${i}`]);
      }
    }
  }

  ingredients();
  

  const iconsDisplay = [
    {
      icon: TimeIcon,
      boldText: '40',
      secondaryText: 'mins'
    },
    {
      icon: SunIcon,
      boldText: '928g',
      secondaryText: 'nutrition'
    },
    {
      icon: StarIcon,
      boldText: '680',
      secondaryText: 'reviews'
    },

  ]

  return (
    <Flex h='80vh' w='100%' flexDirection='column' justifyContent='center' alignItems='center'>
      <Text fontSize='4xl'>{ recipe?.strMeal }</Text>
      <Flex w='50%' justifyContent='space-between'>
        { iconsDisplay.map((icon, idx) => {
          return (
          <Flex alignItems='center' key={idx} mt={4}>
            <Icon mr={4} as={icon.icon} />
            <Text mr={2} fontSize='md' as='b'>{ icon.boldText }</Text>
            <Text fontSize='sm' color='gray.300'>{ icon.secondaryText }</Text>
        </Flex>
          )
        })}
      </Flex>
      
      <Flex w='80%' h='80%' overflow='auto' mt={14}  justifyContent='space-between'>
        <Flex p={2} w='50%' h='100%' overflow='auto' flexDirection='column' bg='#f2f2f2' boxShadow='base'>
          <Tabs colorScheme='teal'>
            <TabList >
              <Tab  _focus={{ outline: 'none'}}>Instructions</Tab>
              <Tab _focus={{ outline: 'none'}}>Ingredients</Tab>
            </TabList>
            <TabPanels >
              <TabPanel p={4}>
                { instructions?.map((instr, idx) =>  <Text fontSize='sm' pb={4} key={idx}>{ instr }</Text> )}
              </TabPanel>
              <TabPanel>
                <Table>
                  <Tbody>
                    { Object.keys(mainIngredients).map((key, idx) => {
                      return (
                        <Tr key={idx}>
                          <Td ><Text as='b'>{ key }</Text></Td>
                          <Td fontSize='sm'>{ mainIngredients[key] }</Td>
                        </Tr>
                      )
                    })}
                  </Tbody>
                </Table>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
        <Flex h='100%' w='50%' justifyContent='center' flexDirection='column'>
          <Image h='90%' w='100%' src={ recipe?.strMealThumb } alt='main image of recipe' />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ViewRecipeDetails;

