import {
     Avatar,
     AvatarBadge,
     Box,
     Divider,
     Flex,
     Text,
     IconButton,
     VStack,
     HStack,
     Heading,
     Input,
     ListItem,
     List,
} from "@chakra-ui/react"
import React from "react"

import { FaFacebook, FaFacebookMessenger } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import UserAvatar from "./UserAvatar"
import ChartRow from "./ChartRow"

function ChartHistroySideBar() {
     const onlineFriends = [
          {
               first_name: "Jesse b",
          },
          {
               first_name: "Kessiah",
          },
          {
               first_name: "Tadio",
          },
          {
               first_name: "Duane",
          },
          {
               first_name: "Avivah",
          },
          {
               first_name: "Randee",
          },
          {
               first_name: "Caz",
          },
          {
               first_name: "Alfy",
          },
          {
               first_name: "Ester",
          },
          {
               first_name: "Bayard",
          },
          {
               first_name: "Alexis",
          },
          {
               first_name: "Corny",
          },
          {
               first_name: "Crawford",
          },
          {
               first_name: "Hyacintha",
          },
          {
               first_name: "Val",
          },
          {
               first_name: "Nero",
          },
          {
               first_name: "Tracey",
          },
          {
               first_name: "Katy",
          },
          {
               first_name: "Filippa",
          },
          {
               first_name: "Torin",
          },
     ]

     return (
          <VStack h='full' align='center' w='full' spacing={6}>
               <Flex
                    w='full'
                    flexDir='column'
                    align='center'
                    justify='flex-start'
                    mt={4}
               >
                    <Avatar name='premwit' size='2xl'>
                         <AvatarBadge
                              bg='green.500'
                              boxSize='8'
                              borderWidth={4}
                              mx='4'
                         />
                    </Avatar>
                    <VStack>
                         <Heading size='md' mt={{ base: 2, lg: 3 }}>
                              Premwit Min
                         </Heading>

                         <HStack px={8} justify='center' spacing={3} mt={6}>
                              <IconButton
                                   icon={<FaFacebook />}
                                   variant='ghost'
                                   rounded='full'
                                   color='gray.500'
                                   h={10}
                                   aria-label='FaFacebook'
                              />
                              <IconButton
                                   icon={<FaFacebookMessenger />}
                                   variant='ghost'
                                   rounded='full'
                                   color='gray.500'
                                   h={10}
                                   aria-label='RiDribbbleLine'
                              />
                              <IconButton
                                   icon={<GrInstagram />}
                                   variant='ghost'
                                   rounded='full'
                                   color='gray.500'
                                   h={10}
                                   aria-label='RiDribbbleLine'
                              />
                         </HStack>
                    </VStack>
               </Flex>
               <Box px={8} w='full'>
                    <Divider color='gray.400' />
               </Box>
               <HStack px={8} w='full' justify='space-between'>
                    <Heading size='sm'>Friends Online</Heading>
                    <Text fontSize='sm'> 23</Text>
               </HStack>
               <HStack
                    overflow='auto'
                    minH={24}
                    px={8}
                    w='full'
                    justify='flex-start'
                    spacing={3}
               >
                    {onlineFriends.map((frind) => (
                         <UserAvatar
                              name={frind.first_name}
                              key={frind.first_name}
                         />
                    ))}
               </HStack>
               <Box px={8} w='full'>
                    <Heading size='sm ' w='full'>
                         Chats
                    </Heading>
                    <Input
                         variant='filled'
                         mt={2}
                         minH={10}
                         rounded='full'
                         placeholder='Search '
                    />
               </Box>
               <Box w='full' overflowY='auto'>
                    <List w='full' spacing={0}>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                         <ListItem>
                              <ChartRow />
                         </ListItem>
                    </List>
               </Box>
          </VStack>
     )
}

export default ChartHistroySideBar
