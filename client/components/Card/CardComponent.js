import { Flex, Text } from "@chakra-ui/react";

const CardComponent = () => {
  return (
    <Flex flexDir={"column"} w={"16rem"} marginRight={"1rem"} >
      <Flex
        w={"16rem"}
        h={"10rem"}
        shadow={"md"}
        borderRadius={"1rem"}
        bg={"gray.400"}
      ></Flex>
      <Text  textAlign={"left"} paddingInline={"0.5rem"} lineHeight={"1.25"} paddingTop={"0.5rem"} color={"gray.900"} size="sm">Ordenanza municipal para actividades economicas</Text>
    </Flex>
  );
};

export default CardComponent;
