import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useEffect } from "react"
import FormLogin from "../components/Forms/FormLogin"
import { AuthContext } from "../context/AuthContext"
import { LoadingContext } from "../context/LoadingContext"

const login = () => {
    const {user} = useContext(AuthContext)
    const {setLoading} = useContext(LoadingContext)
    const router = useRouter()
    const redirect = async () => {
    user || localStorage.getItem("authConcejo") && (await router.push("/dashboard"));
  };

  useEffect(() => {
      redirect()
  }, [router])
    return (
        <Flex flexDirection={"column"} position={"fixed"} h={"100vh"} w={"100%"} bg={"gray.300"}  left={0} top={0} _before={{content : "''", width: "100%", height: "50%", position: "absolute", bg : "orangered", borderBottomRadius: "10%"}} > 
        <Container maxW={"container.lg"}>
            <Flex alignItems={"center"} justifyContent={"center"} h={"100vh"}>
            <Flex  padding={"2rem"} bg="white" w={"35rem"} h={"25rem"} borderRadius={"1rem"} shadow={"md"} zIndex={"50"} alignItems={"center"} flexDirection={"column"}  >
                <Image positi src={"/Logo-orangered.png"} width={250} height={100} objectFit="contain" objectPosition={"center"}/>
                <FormLogin />
                <Text fontSize={"sm"} color={"orangered"}>¿Olvidaste la contraseña?</Text>
             </Flex>
            </Flex>

        </Container>
        </Flex>
    )
}

export default login
