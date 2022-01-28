import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import Header from './Header';

const LandingPage = () => {

    return (
      <>
     <Header />
     <Flex ml={10}  h='80vh' alignItems='center' justifyContent='center'>
       <Flex flexDirection='column'>
        <Text color='teal.300' mb={4} fontSize='5xl'>Build A Customised List With All Your Favourite Recipes</Text>
        <Text as='i' fontSize='lg'>Click the button below to view your previously saved and loved recipes!</Text>
        <Box>
          <Button mt={10} colorScheme='teal'>View Recipes</Button>
        </Box>
       </Flex>
       <Image src='https://i.ibb.co/ZKxbfTD/recipe-plate-removebg-preview.png' alt='font food image' />
     </Flex> 
     </>
    )
}


export default LandingPage;