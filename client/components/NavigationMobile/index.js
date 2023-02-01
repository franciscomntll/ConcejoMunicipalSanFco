import { Flex, IconButton } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { UserIcon } from "../icons";
import DocsIcon from "../icons/DocsIcon";
import HomeIcon from "../icons/HomeIcon";

const NavigationMobile = () => {
  const buttons = [
    { route: "/", icon: <HomeIcon /> },
    { route: "/login", icon: <UserIcon /> },
    { route: "/gaceta-municipal", icon: <DocsIcon /> },
    { route: "/gaceta-municipal", icon: <DocsIcon /> },
  ];
  return (
    <Flex
      display={["flex", "none"]}
      position={"fixed"}
      bottom={0}
      left={0}
      h={"5rem"}
      w={"100%"}
      bg={"white"}
      zIndex={"50"}
      shadow={"lg"}
      roundedTop={"3xl"}
      padding={"1.25rem"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      {buttons.map((item, idx) => (
        <Link key={idx} href={item.route}>
          <IconButton
          padding={"0.25rem"}
            bg={"transparent"}
            rounded={"full"}
            ringColor={"orangered"}
          >
            {item.icon}
          </IconButton>
        </Link>
      ))}
    </Flex>
  );
};

export default NavigationMobile;
