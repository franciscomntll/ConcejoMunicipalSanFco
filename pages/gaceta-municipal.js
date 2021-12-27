import { Grid, GridItem, Flex, Heading, Container } from "@chakra-ui/layout";
import { useMemo } from "react";
import { SearchInput } from ".";
import PDFCell from "../components/Datatable/CustomCells/PDFCell";
import Datatable from "../components/Datatable";
const gacetaMunicipal = () => {
    const columns = useMemo(
        () => [
          {
            Header: 'No de gaceta',
            accessor: "nGaceta"
          },
          {
            Header: 'Fecha de publicación',
            accessor:"publishDate"
          },
          {
            Header: 'Sumario',
            accessor:"sumary"
          },
          {
            Header: 'PDF',
            Cell: <PDFCell/>
          },
          
        ],
        []
      )
  return (
    <Container maxWidth={"container.lg"} w={"100%"} h={"100%"}>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={"1rem"}
        alignItems={"center"}
        w={"100%"}
      >
        <GridItem colSpan={[3,1]}>
          <Heading w={"100%"} textAlign={"center"} size={"lg"}>
            Gacetas municipales
          </Heading>
        </GridItem>
        <GridItem colSpan={[3,2]}>
          <SearchInput />
        </GridItem>
      <GridItem colSpan={[3]} w={"100%"} overflow={"auto"} >
      <Datatable columns={columns} data={[{nGaceta : "0001", publishDate : "27-05-2021", sumary: "hola mundo"}]} />

      </GridItem>
      </Grid>
    </Container>
  );
};

export default gacetaMunicipal;
