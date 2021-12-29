import { Flex, Text } from "@chakra-ui/layout";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { UserIcon } from "../icons";
import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import Image from "next/image";
import { AuthContextProvider, WidthContextProvider, LoadingContextProvider } from "../../context";

const Navigation = () => {
  const { user } = AuthContextProvider();
  const { width } = WidthContextProvider();
  const { setLoading } = LoadingContextProvider();
  const router = useRouter();

  const handleSignOut = () => {
    const auth = getAuth();
    localStorage.removeItem("authConcejo");
    auth.signOut();
    router.push("/");
  };

  useEffect(() => {
    setLoading(true)
   const timeout = setTimeout(() => {
    setLoading(false)
  }, 500);
      return () => {
        clearTimeout(timeout)
      }
  
  }, [router.asPath])
  
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      height={"fit-content"}
      display={["none", "flex"]}
    >
      <Link href={"/"}>
      <Button opacity={width && router.asPath === "/" ? 0 : 1} transition={"all"} transitionDuration={"0.5s"}>
     <Image  src={"/Logo-gray.png"} width={170} height={50} objectFit="contain" objectPosition={"center"}/>
      </Button>
      </Link>
      <Flex alignItems={"center"} gap={"0.5rem"} position={"relative"}>
        {user ? (
          <>
            <Menu>
              <MenuButton position={"relative"} as="button">
                <Flex alignItems={"center"} gap={"0.5rem"}>
                  <Avatar size={"sm"} />
                  <Text fontSize={"sm"} fontWeight={"semibold"} letterSpacing={"tighter"}>
                    {user.email}
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList zIndex={"20"} fontSize={"sm"} padding={"0"}>
                <MenuItem onClick={() => router.push("/")}>Inicio</MenuItem>
                <MenuItem onClick={() => router.push("/dashboard")}>
                  Panel de administración
                </MenuItem>
                <MenuItem onClick={handleSignOut}>Cerrar sesión</MenuItem>
              </MenuList>
            </Menu>
          </>
        ) : (
          <Link href={"/login"}>
            <Button
              bg={"orangered"}
              color="white"
              _hover={{ bg: "white", color: "orangered" }}
              display={"flex"}
              gap={"0.3rem"}
              border={"1px solid orangered"}
              size={"sm"}
            >
              <UserIcon /> Iniciar Sesión
            </Button>
          </Link>
        )}
      </Flex>
    </Flex>
  );
};

export default Navigation;
