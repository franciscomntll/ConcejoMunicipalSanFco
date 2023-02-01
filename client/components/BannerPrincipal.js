import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { WidthContextProvider } from "../context";

export const BannerPrincipal = () => {
  const { width, setWidth } = WidthContextProvider();

  return (
    <Box
      marginLeft={["0", !width ? `-100rem` : "0"]}
      transition={"all 0.5s ease-out"}
      onClick={() => setWidth(!width)}
      cursor={["default", "pointer"]}
      width={["100%", "110rem"]}
      height={["70vh", "100vh"]}
      position={"relative"}
      roundedRight={["", "5rem"]}
      overflow={"hidden"}
      backgroundImage={"url('/banner.jpg')"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      shadow={"md"}
      _after={{
        content: '""',
        width: "100%",
        height: "100%",
        background:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(42,42,42,0.29735644257703087) 100%)",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      <Flex
        zIndex={"50"}
        position={"relative"}
        padding={["3rem"]}
        color={"white"}
        justify={"space-between"}
        flexDirection={"column"}
        height={"100%"}
      >
        <Flex width={"15rem"} marginInline={["auto", "0"]}>
          <img
            src="/logo.png"
            width={"100%"}
            height={"100%"}
            objectFit="contain"
          />
        </Flex>
        <Box w={"100%"}>
          <Heading
            as={"h1"}
            size={"xl"}
            color="white"
            fontWeight={"normal"}
            autoCapitalize
          >
            ¡El <strong>Concejo Municipal</strong> <br />{" "}
            <Text size={"lg"}>ahora esta más cerca de ti!</Text>
          </Heading>
          <Text
            fontSize={"xs"}
            fontWeight={"thin"}
            color="white"
            paddingBottom={"1rem"}
          >
            Lorem Lorem LoremLoremLoremLoremLoremLoremLoremLoremLorem
          </Text>
          <Button
            bg={"orangered"}
            _hover={{ color: "orangered", background: "white" }}
          >
            Quiero conocerlo
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};
