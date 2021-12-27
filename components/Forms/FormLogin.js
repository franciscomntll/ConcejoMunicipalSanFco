import { Button, Flex, useToast } from "@chakra-ui/react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Form, Formik } from "formik";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { LoadingContext } from "../../context/LoadingContext";
import InputField from "./InputField";

const FormLogin = () => {
    const {setLoading} = useContext(LoadingContext)
    const {setUser} = useContext(AuthContext)
    const router = useRouter()
    const toast = useToast()
 
    const handleSubmit = async(values, actions) => {
        setLoading(true)
        try {
            const auth = getAuth()
            const {user}= await signInWithEmailAndPassword(auth, values.email, values.password)
            setUser(user)
            localStorage.setItem("authConcejo", await user.getIdToken())
            router.push("/dashboard")
            setLoading(false)
            toast({
              status: "success",
              description: "Bienvenido de nuevo",
              isClosable: true,
              position: "top-right"
            })
        } catch (error) {
          setLoading(false)
          console.log(error)
            toast({
              status: "error",
              description: JSON.stringify(error),
              isClosable: true,
              position: "bottom-right"
            })
            return error
        }
    }
    const initialValues = {
        email : "",
        password: ""
    }
  return (
    <>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Flex paddingBlock={"1rem"} gap={"1rem"} flexDir={"column"}>
            <InputField
              name={"email"}
              type={"email"}
              label={"Correo electronico"}
            />
            <InputField
              name={"password"}
              type={"password"}
              label={"Contraseña"}
            />
            <Button type={"submit"} bg={"orangered"} color={"white"} _hover={{color:"orangered", bg:"gray.200"}}>Iniciar sesión</Button>
          </Flex>
        </Form>
      </Formik>
      
    </>
  );
};

export default FormLogin;
