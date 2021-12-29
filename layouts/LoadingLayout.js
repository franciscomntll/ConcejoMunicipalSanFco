import { Flex, Spinner, Text } from "@chakra-ui/react"
import Image from "next/image"

const LoadingLayout = () => {
    return (
        <Flex h={"100vh"} w={"100vw"} position={"fixed"} top={0} left={0} zIndex={100} bg={"white"} alignItems={"center"} flexDir={["column", "row"]} justifyContent={"center"} gap={"1rem"}>

            <Image src={"/Logo-orangered.png"} width={250} height={80} objectFit="contain" objectPosition={"center"}/>
            
            <Flex gap={"0.5rem"} color={"orangered"}>
            <Spinner/>
            <Text size="sm" fontWeight={"600"}>Cargando</Text>
            </Flex>
        </Flex>
    )
}

export default LoadingLayout
