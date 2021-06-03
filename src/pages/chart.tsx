import { Flex, HStack } from "@chakra-ui/react"
import React from "react"

function chart() {
     return (
          <HStack h='100vh' spacing={0}>
               <Flex As='nav' h='full' maxW={16} w='full' bg='gray' />
               <Flex
                    As='aside'
                    h='full'
                    maxW={"sm"}
                    w='full'
                    borderRightColor='gray.100'
                    borderRightWidth={1}
               />
               <Flex
                    As='main'
                    h='full'
                    flex={1}
                    w='full'
                    borderRightColor='gray.100'
                    borderRightWidth={1}
               />
               <Flex As='aside' h='full'  w='full' maxW="sm" />
          </HStack>
     )
}

export default chart
