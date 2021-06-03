import { IconButton, Tooltip, VStack } from "@chakra-ui/react"
import React from "react"
import {
     MdDashboard,
     MdFingerprint,
     MdNotifications,
     MdSearch,
     MdSettings,
     MdSms,
} from "react-icons/md"
const NavigationChart = () => {
     return (
          <VStack p={6} justify='space-between' align='center' w='full'>
               {/* logo */}
               <VStack>
                    {/* nav icon */}

                    <Tooltip
                         label='Dashboard'
                         aria-label='Dashboard'
                         placement='right'
                    >
                         <IconButton
                              color='gray.500'
                              icon={<MdDashboard />}
                              aria-label='Dashboard'
                         />
                    </Tooltip>
                    <Tooltip
                         label='Fingerprint'
                         aria-label='Fingerprint'
                         placement='right'
                    >
                         <IconButton
                              color='gray.500'
                              icon={<MdFingerprint />}
                              aria-label='Fingerprint'
                         />
                    </Tooltip>
                    <Tooltip
                         label='Search'
                         aria-label='Search'
                         placement='right'
                    >
                         <IconButton
                              color='gray.500'
                              icon={<MdSearch />}
                              aria-label='Search'
                         />
                    </Tooltip>
                    <Tooltip
                         label='Notifications'
                         aria-label='Notifications'
                         placement='right'
                    >
                         <IconButton
                              color='gray.500'
                              icon={<MdNotifications />}
                              aria-label='Notifications'
                         />
                    </Tooltip>
                    <Tooltip label='Sms' aria-label='Sms' placement='right'>
                         <IconButton
                              color='gray.500'
                              icon={<MdSms />}
                              aria-label='Sms'
                         />
                    </Tooltip>
               </VStack>
               <VStack>
                    {/* footer */}
                    <Tooltip
                         label='Settings'
                         aria-label='Settings'
                         placement='right'
                    >
                         <IconButton
                              color='gray.500'
                              icon={<MdSettings />}
                              aria-label='Settings'
                         />
                    </Tooltip>
               </VStack>
          </VStack>
     )
}

export default NavigationChart
