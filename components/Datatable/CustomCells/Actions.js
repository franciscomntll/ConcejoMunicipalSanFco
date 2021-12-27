import { DeleteIcon, EditIcon, ViewIcon } from "@chakra-ui/icons"
import { Flex, IconButton } from "@chakra-ui/react"

const Actions = () => {
    const icons = [
        <EditIcon />,
        <ViewIcon/>,
        <DeleteIcon/>,
    ]
    return (
        <Flex alignItems={"center"} gap={"0.8rem"}>
            {icons.map((item,idx) => (
                <IconButton key={idx}>
                {item}
            </IconButton>
            ))}
            
        </Flex>
    )
}

export default Actions
