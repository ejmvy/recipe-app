import { Button, Flex, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, Text, useDisclosure } from "@chakra-ui/react";


const CreateNewPopup = ({ onAdd }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return ( 
    <>
      <Button onClick={onOpen} variant='outline' colorScheme='teal'>Create New</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new recipe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input  _focus={{ borderBottom: '2px', borderBottomColor: 'teal.300' }} placeholder="Recipe Name" />
            <Stack my={5} direction='row' spacing={3}>
              <Input _focus={{ borderBottom: '2px', borderBottomColor: 'teal.300' }} placeholder="Category" />
              <Input _focus={{ borderBottom: '2px', borderBottomColor: 'teal.300' }} placeholder="Tags" />
              <Input _focus={{ borderBottom: '2px', borderBottomColor: 'teal.300' }} placeholder="Country" />
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='teal' variant='solid'>Save</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}



export default CreateNewPopup;