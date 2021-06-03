import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/react"
import React from "react"

const ChartRow = () => {
     return (
          <Flex
               py={4}
               px={8}
               w='full'
               align='center'
               borderBottomColor='gray.400'
               borderBottomWidth='1'
               style={{ transition: "background 300ms" }}
               _hover={{ bg: "gray.50", cursor: "pointer" }}
          >
               <Box rounded='full' bg='gray.100' minW={14} minH={14} mr={4} />
               <VStack
                    overflow='hidden'
                    flex='1'
                    mt={3}
                    spacing={0}
                    align='flex-start'
               >
                    <Heading fontSize='{12}' w='full'>
                         {" "}
                         John Shinode
                    </Heading>
                    <Text
                         overflow='hidden'
                         testOverflow='ellipsis'
                         whiteSpace='nowrap'
                         w='full'
                         fontSize='xs'
                         color='gray.500'
                    >
                         Sample text message go hear
                    </Text>
               </VStack>
               <Text mt={3} fontSize='xs' color='gray.500'>
                    08:00
               </Text>
          </Flex>
     )
}

export default ChartRow
