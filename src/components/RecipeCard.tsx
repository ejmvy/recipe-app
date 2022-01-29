import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import { RecipeState } from "../types";

const RecipeCard = ( {recipeInfo, onOpen } : any) => {
  

  console.log('display,', recipeInfo.strMeal);
  return (
    <Box onClick={() => onOpen(recipeInfo.id)} w='100%' border='1px' borderColor='gray.200' boxShadow='base' rounded='md' my={4} cursor='pointer'>
      <Flex>
        <Image  w='40%' src={recipeInfo.strMealThumb} alt='recipe photo' />
        <Flex p={4} flexDirection='column'>
          <Text mb={3} fontSize='2xl' color='teal.300'>{ recipeInfo.strMeal }</Text>
          <Text  fontSize='md' color='gray.400'>{ ` ${recipeInfo.strCategory} ${recipeInfo.strArea} `}</Text>
          <Text mb={8} fontSize='md' color='gray.400'>{ recipeInfo.strTags }</Text>
          <Text mb={8} fontSize='sm' color='gray.600'>{ recipeInfo.strInstructions.slice(0, 90) + '...' }</Text>
          <Link fontSize='sm' color='teal' _hover={{ color:'teal.300'}} href={recipeInfo.strYoutube}>View on Youtube</Link>
        </Flex>
      </Flex>
    </Box>
  )
}


export default RecipeCard;
