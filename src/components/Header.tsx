import { Flex, Image, Text } from "@chakra-ui/react"

const Header = () => {
  return (
    <Flex justifyContent='start' m={4}>
      <Image height='50px' src='https://i.ibb.co/tXjJRVf/logo-yummy.png' alt='website logo' />
      {/* <Text fontSize='md'>View Recipes</Text> */}
    </Flex>

  )
}

export default Header;