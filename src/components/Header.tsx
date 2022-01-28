import { Flex, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate();

  return (
    <Flex justifyContent='start' m={4}>
      <Image cursor='pointer' onClick={() => navigate('/')} height='50px' src='https://i.ibb.co/tXjJRVf/logo-yummy.png' alt='website logo' />
      {/* <Text fontSize='md'>View Recipes</Text> */}
    </Flex>

  )
}

export default Header;