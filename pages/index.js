import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/react";
import Slider from "react-slick";
import CardComponent from "../components/Card/CardComponent";
import {SearchIcon} from "../components/icons";
import router from 'next/router'  

const index = () => {
  return (
    <Flex
      w={"100%"}
      flexDirection={["column"]}
      paddingBlock={["", "2rem"]}
      gap={"3rem"}
      overflowX={"auto"}
    >
      {/* <SearchInput /> */}
      <SectionComponent
        title={"Gacetas municipales"}
        subTitle={"Ultimas publicaciones"}
      />
      <SectionComponent title={"Noticias"} subTitle={"Ultimas noticias"} />
      <StreamingComponent />
    </Flex>
  );
};

export default index;

export const SearchInput = () => {
  return (
    <Box
      position={"relative"}
      width={["100%", "70%"]}
      marginInline={"auto"}
      insetInline={"0"}
    >
      <Input
        bg={"white"}
        shadow={"md"}
        paddingBlock={"1.5rem"}
        paddingLeft={"3rem"}
        borderRadius={"1rem"}
        placeholder="¿Qué buscas?"
      />
      <Box
        position={"absolute"}
        insetBlock={"0"}
        marginBlock={"auto"}
        right={"1rem"}
        width={"1.5rem"}
        height={"1.5rem"}
        zIndex={"10"}
        color={"gray.400"}
      >
        <SearchIcon />
      </Box>
    </Box>
  );
};

export const SectionComponent = ({ title, types = [], subTitle }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <Flex flexDir={"column"} w={"100%"}>
      <Heading as={"h2"} size={"lg"} cursor={"pointer"} onClick={() => router.push("/gaceta-municipal")}>
        {title}
      </Heading>
      <Text as="p" size="sm" paddingTop={"0.3rem"}>
        {subTitle}
      </Text>
      <Flex alignItems={"center"} gap={"0.5rem"} paddingTop={"0.5rem"}>
        {types?.map((item, idx) => (
          <Heading as={"p"} size={"sm"} fontWeight={"300"} key={idx}>
            {item}
          </Heading>
        ))}
      </Flex>
      <Box w={"100%"} position={"relative"} overflow={"hidden"}>
        <Slider {...settings}>
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
          <CardComponent />
        </Slider>
      </Box>
    </Flex>
  );
};

const StreamingComponent = () => {
  return (
    <Flex w={"100%"} height={"12rem"} justifyContent={"center"} borderRadius={"1rem"}  >
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/PY8f1Z3nARo?controls=0"
        title="Concejo municipal en vivo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </Flex>
  );
};
