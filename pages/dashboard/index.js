import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Heading,
  Tooltip,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useMemo, useState } from "react";
import Datatable from "../../components/Datatable";
import Actions from "../../components/Datatable/CustomCells/Actions";
import FormGaceta from "../../components/Forms/FormGaceta";
import ModalFormGaceta from "../../components/Modal/ModalFormGaceta";
import { AuthContextProvider, LoadingContextProvider } from "../../context";

const index = () => {
  const router = useRouter();
  const { user } = AuthContextProvider()
  const { setLoading } = LoadingContextProvider();
  const [selected, setSelect] = useState(null);
  const {isOpen, onOpen, onClose} = useDisclosure()

  const redirect = async () => {
    setLoading(true);
    !user && !localStorage.getItem("authConcejo") && (await router.push("/"));
    setLoading(false);
  };


  useEffect(() => {
    redirect();
  }, [user]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "_id",
      },
      {
        Header: "N° de gaceta",
        accessor: "gacetaNumber",
      },
      {
        Header: "Fecha de subida",
        accessor: "uploadDate",
      },

      {
        Header: "Sumario",
        accessor: "sumary",
      },
      {
        Header: "Acciones",
        accessor: "actions",
        Cell: <Actions />,
      },
    ],
    []
  );
  return (
    <>
    <ModalFormGaceta isOpen={isOpen} onClose={onClose} />
    
      <Tooltip label="Añadir registro">
        <Button
        onClick={onOpen}
          position={"fixed"}
          w={"3rem"}
          h={"3rem"}
          bottom={"10"}
          right={"10"}
          rounded={"100%"}
          zIndex={50}
          bg={"orangered"}
          _hover={{ bg: "blue.600" }}
          color={"white"}
        >
          <AddIcon />
        </Button>
      </Tooltip>
      <Container
        h={"100%"}
        paddingTop={"2rem"}
        maxW={"container.xl"}
        display={"flex"}
        flexDir={"column"}
        gap={"1rem"}
        overflow={"auto"}
      >
        <Heading as="h1" fontSize={"2xl"} color={"orangered"}>
          Panel de administración
        </Heading>
        <Tabs overflowX={"auto"} bg={"white"} padding={"1rem"} rounded={"1rem"} w={"100%"}>
          <TabList >
            <Tab>Gaceta Municipal</Tab>
            <Tab>Noticias</Tab>
          </TabList>

          <TabPanels overflow={"auto"} w={"100%"}>
            <TabPanel  w={"100%"}>
              <Datatable
                columns={columns}
                data={[
                  {
                    _id: "1412412421414",
                    gacetaNumber: 2,
                    uploadDate: "3124124",
                    sumary: "$124124124",
                  },
                  {
                    _id: "1412412421414",
                    gacetaNumber: 2,
                    uploadDate: "3124124",
                    sumary: "$124124124",
                  },
                  {
                    _id: "1412412421414",
                    gacetaNumber: 2,
                    uploadDate: "3124124",
                    sumary: "$124124124",
                  },
                  {
                    _id: "1412412421414",
                    gacetaNumber: 2,
                    uploadDate: "3124124",
                    sumary: "$124124124",
                  },
                  {
                    _id: "1412412421414",
                    gacetaNumber: 2,
                    uploadDate: "3124124",
                    sumary: "$124124124",
                  },
                  {
                    _id: "1412412421414",
                    gacetaNumber: 2,
                    uploadDate: "3124124",
                    sumary: "$124124124",
                  },
                ]}
              />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </>
  );
};

export default index;
