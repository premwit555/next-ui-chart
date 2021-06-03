import {
     Flex,
     HStack,
     IconButton,
     Input,
     Stat,
     StatLabel,
     StatNumber,
} from "@chakra-ui/react"
import React from "react"
import ChatBubble from "./ChatBubble"
import { IoSend } from "react-icons/io5"

const Chart = () => {
     const messages = [
          {
               date: "8:15 AM",
               from: "othes",
               message: "Crotalus cerastes",
          },
          {
               date: "5:59 PM",
               from: "me",
               message: "Spermophilus armatus",
          },
          {
               date: "2:53 AM",
               from: "othes",
               message: "Macropus agilis",
          },
          {
               date: "8:09 AM",
               from: "me",
               message: "Coracias caudata",
          },
          {
               date: "12:44 AM",
               from: "othes",
               message: "Neophron percnopterus",
          },
          {
               date: "2:56 AM",
               from: "me",
               message: "Pandon haliaetus",
          },
          {
               date: "7:35 PM",
               from: "othes",
               message: "Felis silvestris lybica",
          },
          {
               date: "6:43 PM",
               from: "me",
               message: "Branta canadensis",
          },
          {
               date: "9:59 AM",
               from: "othes",
               message: "Tadorna tadorna",
          },
          {
               date: "12:06 AM",
               from: "me",
               message: "Lamprotornis nitens",
          },
          {
               date: "1:23 PM",
               from: "othes",
               message: "Gyps bengalensis",
          },
          {
               date: "1:24 PM",
               from: "me",
               message: "Erethizon dorsatum",
          },
          {
               date: "12:34 PM",
               from: "othes",
               message: "Megaderma spasma",
          },
          {
               date: "7:25 AM",
               from: "me",
               message: "Egretta thula",
          },
          {
               date: "8:15 PM",
               from: "othes",
               message: "Pavo cristatus",
          },
          {
               date: "11:08 AM",
               from: "me",
               message: "Aonyx capensis",
          },
          {
               date: "8:12 AM",
               from: "othes",
               message: "Eudromia elegans",
          },
          {
               date: "2:12 PM",
               from: "me",
               message: "Gazella thompsonii",
          },
          {
               date: "7:05 AM",
               from: "othes",
               message: "Libellula quadrimaculata",
          },
          {
               date: "3:13 AM",
               from: "me",
               message: "Gazella thompsonii",
          },
          {
               date: "4:25 AM",
               from: "othes",
               message: "Ceratotherium simum",
          },
          {
               date: "9:50 PM",
               from: "me",
               message: "Bubulcus ibis",
          },
          {
               date: "3:14 AM",
               from: "othes",
               message: "Porphyrio porphyrio",
          },
          {
               date: "1:59 AM",
               from: "me",
               message: "Francolinus coqui",
          },
          {
               date: "6:58 AM",
               from: "othes",
               message: "Spilogale gracilis",
          },
          {
               date: "7:11 AM",
               from: "me",
               message: "Lorythaixoides concolor",
          },
          {
               date: "11:17 AM",
               from: "othes",
               message: "Macropus agilis",
          },
          {
               date: "5:36 AM",
               from: "me",
               message: "Columba livia",
          },
          {
               date: "12:29 PM",
               from: "othes",
               message: "Madoqua kirkii",
          },
          {
               date: "10:47 PM",
               from: "me",
               message: "Genetta genetta",
          },
          {
               date: "7:42 PM",
               from: "othes",
               message: "Physignathus cocincinus",
          },
          {
               date: "11:16 PM",
               from: "me",
               message: "Felis wiedi or Leopardus weidi",
          },
          {
               date: "12:34 AM",
               from: "othes",
               message: "Zosterops pallidus",
          },
          {
               date: "11:42 PM",
               from: "me",
               message: "Cynictis penicillata",
          },
          {
               date: "1:11 PM",
               from: "othes",
               message: "Phalacrocorax niger",
          },
          {
               date: "5:03 PM",
               from: "me",
               message: "Bassariscus astutus",
          },
          {
               date: "11:19 AM",
               from: "othes",
               message: "Dasyurus maculatus",
          },
          {
               date: "4:03 AM",
               from: "me",
               message: "Phascogale tapoatafa",
          },
          {
               date: "9:09 PM",
               from: "othes",
               message: "Spermophilus lateralis",
          },
          {
               date: "6:06 PM",
               from: "me",
               message: "Sitta canadensis",
          },
          {
               date: "1:51 PM",
               from: "othes",
               message: "Lorythaixoides concolor",
          },
          {
               date: "12:17 AM",
               from: "me",
               message: "Corvus albus",
          },
          {
               date: "12:50 PM",
               from: "othes",
               message: "Corvus brachyrhynchos",
          },
          {
               date: "11:30 AM",
               from: "me",
               message: "Varanus albigularis",
          },
          {
               date: "11:48 PM",
               from: "othes",
               message: "unavailable",
          },
          {
               date: "8:53 AM",
               from: "me",
               message: "Streptopelia senegalensis",
          },
          {
               date: "8:04 PM",
               from: "othes",
               message: "Colobus guerza",
          },
          {
               date: "6:32 AM",
               from: "me",
               message: "Hymenolaimus malacorhynchus",
          },
          {
               date: "1:42 AM",
               from: "othes",
               message: "Erethizon dorsatum",
          },
          {
               date: "12:28 PM",
               from: "me",
               message: "Cynomys ludovicianus",
          },
          {
               date: "11:20 AM",
               from: "othes",
               message: "Phoeniconaias minor",
          },
          {
               date: "1:49 PM",
               from: "me",
               message: "Taurotagus oryx",
          },
          {
               date: "12:08 AM",
               from: "othes",
               message: "Merops nubicus",
          },
          {
               date: "5:00 PM",
               from: "me",
               message: "Ardea golieth",
          },
          {
               date: "12:19 PM",
               from: "othes",
               message: "Eolophus roseicapillus",
          },
          {
               date: "9:57 PM",
               from: "me",
               message: "Felis concolor",
          },
          {
               date: "4:14 PM",
               from: "othes",
               message: "Phalacrocorax brasilianus",
          },
          {
               date: "10:28 AM",
               from: "me",
               message: "Crotalus cerastes",
          },
          {
               date: "11:57 AM",
               from: "othes",
               message: "Pandon haliaetus",
          },
          {
               date: "11:37 AM",
               from: "me",
               message: "Ammospermophilus nelsoni",
          },
          {
               date: "10:12 AM",
               from: "othes",
               message: "Ara ararauna",
          },
          {
               date: "11:37 PM",
               from: "me",
               message: "Estrilda erythronotos",
          },
          {
               date: "4:30 AM",
               from: "othes",
               message: "Gopherus agassizii",
          },
          {
               date: "7:39 PM",
               from: "me",
               message: "Oryx gazella",
          },
          {
               date: "10:13 AM",
               from: "othes",
               message: "Phascolarctos cinereus",
          },
          {
               date: "2:52 AM",
               from: "me",
               message: "Cordylus giganteus",
          },
          {
               date: "9:40 PM",
               from: "othes",
               message: "Dasyurus viverrinus",
          },
          {
               date: "7:37 PM",
               from: "me",
               message: "unavailable",
          },
          {
               date: "2:22 PM",
               from: "othes",
               message: "Vulpes cinereoargenteus",
          },
          {
               date: "1:36 PM",
               from: "me",
               message: "Suricata suricatta",
          },
          {
               date: "5:56 PM",
               from: "othes",
               message: "Lemur fulvus",
          },
          {
               date: "12:59 AM",
               from: "me",
               message: "Lepus townsendii",
          },
          {
               date: "3:09 AM",
               from: "othes",
               message: "Funambulus pennati",
          },
          {
               date: "5:52 PM",
               from: "me",
               message: "Sula nebouxii",
          },
          {
               date: "12:45 PM",
               from: "othes",
               message: "Pseudocheirus peregrinus",
          },
          {
               date: "3:09 AM",
               from: "me",
               message: "Macropus robustus",
          },
          {
               date: "12:32 AM",
               from: "othes",
               message: "Ovis ammon",
          },
          {
               date: "9:08 PM",
               from: "me",
               message: "Felis concolor",
          },
          {
               date: "1:24 PM",
               from: "othes",
               message: "Recurvirostra avosetta",
          },
          {
               date: "10:59 PM",
               from: "me",
               message: "Sylvicapra grimma",
          },
          {
               date: "12:38 AM",
               from: "othes",
               message: "Ara ararauna",
          },
          {
               date: "11:37 PM",
               from: "me",
               message: "Bubalus arnee",
          },
          {
               date: "5:49 PM",
               from: "othes",
               message: "Corvus brachyrhynchos",
          },
          {
               date: "7:39 AM",
               from: "me",
               message: "Ateles paniscus",
          },
          {
               date: "11:52 PM",
               from: "othes",
               message: "Pteropus rufus",
          },
          {
               date: "9:47 AM",
               from: "me",
               message: "Diomedea irrorata",
          },
          {
               date: "8:16 PM",
               from: "othes",
               message: "Odocoilenaus virginianus",
          },
          {
               date: "8:37 AM",
               from: "me",
               message: "Diomedea irrorata",
          },
          {
               date: "10:15 PM",
               from: "othes",
               message: "Choloepus hoffmani",
          },
          {
               date: "9:57 PM",
               from: "me",
               message: "Morelia spilotes variegata",
          },
          {
               date: "12:27 AM",
               from: "othes",
               message: "Sarkidornis melanotos",
          },
          {
               date: "5:05 PM",
               from: "me",
               message: "Eurocephalus anguitimens",
          },
          {
               date: "10:26 PM",
               from: "othes",
               message: "Ara chloroptera",
          },
          {
               date: "3:57 PM",
               from: "me",
               message: "Phalaropus fulicarius",
          },
          {
               date: "3:38 PM",
               from: "othes",
               message: "Cacatua galerita",
          },
          {
               date: "7:05 PM",
               from: "me",
               message: "Nannopterum harrisi",
          },
          {
               date: "4:26 PM",
               from: "othes",
               message: "Paradoxurus hermaphroditus",
          },
          {
               date: "3:06 AM",
               from: "me",
               message: "Orcinus orca",
          },
          {
               date: "5:41 PM",
               from: "othes",
               message: "Branta canadensis",
          },
          {
               date: "7:26 PM",
               from: "me",
               message: "Lycosa godeffroyi",
          },
     ]
     return (
          <Flex w='full' flexDir='column'>
               <HStack
                    px={4}
                    py={4}
                    borderBottomWidth={1}
                    borderBottomColor='gray.100'
               >
                    <Input
                         variant='filled'
                         rounded='full'
                         placeholder='Search Friends'
                    />
               </HStack>
               <Flex flexDir='column' px={6} overflowY='auto' flex={1}>
                    <Stat mt={6}>
                         <StatLabel color='gray.500'> Chatting with</StatLabel>
                         <StatNumber>Dina her</StatNumber>
                    </Stat>
                    {messages.map(({ message, from, date }, index) => {
                         return (
                              <ChatBubble
                                   key={index}
                                   message={message}
                                   from={from}
                                   date={date}
                              />
                         )
                    })}
               </Flex>
               <Flex
                    pt={4}
                    pr={2}
                    py={2}
                    borderTopColor='gray.100'
                    borderTopWidth={1}
               >
                    <Input
                         variant='unstyled'
                         placeholder=' Type your message'
                    />
                    <IconButton
                         colorScheme='blue'
                         aria-label='send message'
                         variant='ghost'
                         icon={<IoSend />}
                    />
               </Flex>
          </Flex>
     )
}

export default Chart
