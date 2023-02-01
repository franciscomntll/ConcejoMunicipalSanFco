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
import {
  AuthContextProvider,
  WidthContextProvider,
  LoadingContextProvider,
} from "../../context";

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
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [router.asPath]);

  const menuOptions = [
    { label: "Panel de administracion", route: "/dashboard" },
    { label: "Cerrar Sesión", route: handleSignOut },
  ];
  return (
    <Flex
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      paddingBottom={["1.5rem"]}
      height={"fit-content"}
      display={["none", "flex"]}
    >
      <Link href={"/"}>
        <Button
          opacity={width && router.asPath === "/" ? 0 : 1}
          transition={"all"}
          transitionDuration={"0.5s"}
        >
          <Image
            src={"/Logo-gray.png"}
            width={170}
            height={50}
            objectFit="contain"
            objectPosition={"center"}
          />
        </Button>
      </Link>
      <Flex alignItems={"center"} gap={"0.5rem"} position={"relative"}>
        {user ? (
          <>
            <Menu>
              <MenuButton position={"relative"} as="button">
                <Flex alignItems={"center"} gap={"0.5rem"}>
                  <Avatar size={"sm"} />
                  <Text
                    fontSize={"sm"}
                    fontWeight={"semibold"}
                    letterSpacing={"tighter"}
                  >
                    {user.email}
                  </Text>
                </Flex>
              </MenuButton>
              <MenuList zIndex={"20"} fontSize={"sm"} padding={"0"}>
                {menuOptions.map((item, idx) => (
                  <MenuItem
                    key={idx}
                    {...{
                      onClick:
                        typeof item.route === "function"
                          ? item.route
                          : () => router.push(item.route),
                    }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
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
