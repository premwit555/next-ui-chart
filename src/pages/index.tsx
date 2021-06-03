import { Flex, HStack } from "@chakra-ui/react"
import React from "react"
import NavigationChart from "./../components/Navigation"

const Index = () => {
     return (
          <HStack h='100vh' spacing={0}>
               <Flex As='nav' h='full' maxW={16} w='full' bg='gray.100'>
                    <NavigationChart />
               </Flex>
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
               <Flex As='aside' h='full' w='full' maxW='sm' />
          </HStack>
     )
}

export default Index
