import React from 'react'
import {
    Box,
    Button,
    Container,
    Flex,
    HStack,
    Image,
    Spacer,
    Text,
    VStack,
  } from "@chakra-ui/react";
const ProfileCard = () => {
  return (
    <Flex justifyContent="space-between" w="100%" alignItems='center' >
    <Box p="20px"   >
      <Box maxW='180px' minW='150px' w='15%' >
        <Image
          borderRadius="50%"
          src="https://i.ibb.co/rp3V5Kd/358768461-3390909287831163-5567728346172820606-n.jpg"
        ></Image>
      </Box>
    </Box>

    <Spacer />

    <VStack w="70%" align="flex-start" spacing="20px" >
      <HStack spacing="24px" >
        <Text>arjundangi8349</Text>
        <Button size='sm' fontSize='sm' borderColor='green.800' borderRadius='lg' >Edit Profile</Button>
        <Button size='sm' fontSize='sm' borderColor='green.800' borderRadius='lg'>View Article</Button>
      </HStack>

      <HStack spacing="24px" >
        <Text>0 posts </Text>
        <Text>1 follower</Text>
        <Text>2 following</Text>
      </HStack>

      <VStack  >
        <Text>Arjun Dangi</Text>
      </VStack>
    </VStack>
  </Flex>
  )
}

export default ProfileCard