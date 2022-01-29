import { Flex, Image, Link } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate();

  return (
    <Flex justifyContent='space-between' my={4} mx={6}>
      <Image cursor='pointer' onClick={() => navigate('/')} height='50px' src='https://i.ibb.co/tXjJRVf/logo-yummy.png' alt='website logo' />
      <Link pb={4} onClick={() => navigate('/view')} fontSize='sm' color='teal'>Recipes</Link>
    </Flex>

  )
}

export default Header;