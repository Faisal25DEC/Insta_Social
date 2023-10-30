import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import UserSmallCard from '../profile/userSmallCard'

const Follower = () => {
  return (
      <Flex w="100%">
          <Box></Box>
          <Box w="100%" paddingX="4" paddingY="4" >
              <UserSmallCard text={"follow"} />
              <UserSmallCard text={"follow"} />
              <UserSmallCard text={"follow"} />
              <UserSmallCard text={"follow"} />
              <UserSmallCard text={"follow"} />
          </Box>
    </Flex>
  )
}

export default Follower