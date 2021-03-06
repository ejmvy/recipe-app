import { Button, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";
import axios from "axios";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const PopupDialog = ({ popupInfo, onAdd }: any) => {
  const defaultRecipe = {
    strMeal: '',
    strArea: '',
    strTags: '',
    strYoutube: '',
    strCategory: '',
    strInstructions: '',
    strMealThumb: '',

}

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [ randomRecipe, setRandomRecipe ] = useState(defaultRecipe);


  const fetchRecipe = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((res: any) => {
      setRandomRecipe(res.data.meals[0]);
      onOpen();
    })
    .catch((err: any) => console.log(err));
  }

  const saveRecipe = () => {
    const newRecipe = {
      ...randomRecipe,
      id: uuidv4(),
    }
    onAdd(newRecipe);
    onClose();
  }

  return (
    <>
      <Button  variant='solid' colorScheme='teal' onClick={() => fetchRecipe()}>Fetch Random</Button>

      { randomRecipe && <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent h='50%'>
          <Flex h='100%'>
            <Image borderLeftRadius='8px' w='40%'  src={randomRecipe.strMealThumb} alt='random recipe chosen' />
            <Flex flexDirection='column' >
              <ModalCloseButton _focus={{ outline: 'none'}} />
              <ModalHeader mt={4}>{ randomRecipe.strMeal }</ModalHeader>
              <ModalBody>
                <Text >{ randomRecipe.strTags } </Text>
                <Text >{ randomRecipe.strArea } </Text>
              </ModalBody>
              <ModalFooter>
                <Stack direction='row' spacing={4}>
                  <Button variant='outline' colorScheme='teal' onClick={onClose}>Reject</Button>
                  <Button variant='solid' colorScheme='teal'  onClick={() => saveRecipe()}>Save</Button>

                </Stack>
              </ModalFooter>

            </Flex>
          </Flex>

          
        </ModalContent>
      </Modal>
      }
    </>
  )
}

export default PopupDialog;