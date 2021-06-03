import { Flex, HStack } from "@chakra-ui/react"
import React from "react"
import ChartHistroySideBar from "../components/ChartHistroy/ChartHistroySideBar"
import Chart from "../components/ChartRoom/Chart"
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
               >
                    <ChartHistroySideBar />
               </Flex>

               <Flex
                    As='main'
                    h='full'
                    flex={1}
                    w='full'
                    borderRightColor='gray.100'
                    borderRightWidth={1}
               >
                    <Chart/>
               </Flex>
               <Flex As='aside' h='full' w='full' maxW='sm' />
          </HStack>
     )
}

export default Index
