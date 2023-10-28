import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
  } from '@chakra-ui/react'

import React from 'react'

const PopUp = ({onOpen}) => {
    const { isOpen,  onClose } = useDisclosure()
  
    return (
      <>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
        <Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text fontWeight='bold' mb='1rem'>
                You can scroll the content behind the modal
              </Text>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}

export default PopUp