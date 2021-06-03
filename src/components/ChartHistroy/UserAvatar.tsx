import { Avatar, AvatarBadge, Tooltip } from "@chakra-ui/react"
import React from "react"

type Props = {
     name: string
}

const UserAvatar = ({ name }: Props) => (
     <Tooltip label={name}>
          <Avatar name={name}>
               <AvatarBadge boxSize={4} bg='green.400' />
          </Avatar>
     </Tooltip>
)

export default UserAvatar
