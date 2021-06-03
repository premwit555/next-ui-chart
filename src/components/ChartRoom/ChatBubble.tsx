import { VStack ,Box,Text } from "@chakra-ui/react"
import React from "react"

type Props = {
     message: string
     from: string
     date: string
}

const ChatBubble = ({ message, from, date }: Props) => {
     const isMe = from === "me";
     const alignment = isMe ? "flex-end" : "flex-start";
     const bottomRightRadius = isMe ? 0 : 32;
     const bottomLeftRadius = isMe ? 32 : 0;

   



     return (
          <VStack mt={6} align={alignment} alignSelf={alignment}>
               <Box
                    bg={isMe ? "blue.50" : "gray.100"}
                    px={6}
                    py={4}
                    maxW={80}
                    borderTopLeftRadius={32}
                    borderTopRightRadius={32}
                    borderBottomLeftRadius={bottomLeftRadius}
                    borderBottomRightRadius={bottomRightRadius}
               >
                    {" "}
                    {message}{" "}
               </Box>
               <Text fontSize='xs' color='gray'>
                    {date}
               </Text>
          </VStack>
     )
}

export default ChatBubble
