import { AddIcon, DownloadIcon, UpDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  FormLabel,
  Grid,
  GridItem,
  Input,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Select,
  SelectField,
  Textarea,
  Text,
} from "@chakra-ui/react";
import dayjs from "dayjs";
import { FieldArray, Form, Formik } from "formik";
import React, { useState } from "react";
import DocsIcon from "../icons/DocsIcon";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";

const FormGaceta = () => {
  const initialValues = {
    gacetaNumber: null,
    textWithoutFormat: "",
    sumary: [],
    publishDate: dayjs().format("YYYY-MM-DD"),
  };
  const handleSubmit = (values, actions) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="form">
        <Grid templateColumns={"repeat(2, 1fr)"} gap={"1rem"}>
          <InputField
            name={"gacetaNumber"}
            type={"number"}
            label={"N° de gaceta"}
          />
          <InputField
            name={"publishDate"}
            type={"date"}
            label={"Fecha de publicación"}
          />
          <GridItem colSpan={"2"}>
            <SumaryComponent />
          </GridItem>
          <GridItem colSpan={"2"}>
            <TextAreaField
              name={"textWithoutFormat"}
              type={"text"}
              label={"Gaceta (texto sin formato)"}
            />
          </GridItem>
          <GridItem colSpan={"2"}>
            <UploadComponent />
          </GridItem>
          <GridItem colSpan={"2"}>
            <Button
              w={"100%"}
              fontSize={"md"}
              bg={"white"}
              color={"orangered"}
              border={"1px solid orangered"}
              _hover={{ bg: "orangered", color: "white" }}
              size={"lg"}
              letterSpacing={"tight"}
            >
              Publicar gaceta
            </Button>
          </GridItem>
        </Grid>
      </Form>
    </Formik>
  );
};

export default FormGaceta;

const SumaryComponent = () => {
  const initialValues = {
    type: "",
    title: "",
    date: "",
  };
  const [value, setValue] = useState(initialValues);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  const handleClick = (helpers) => {
    helpers.push(value);
    setValue(initialValues);
  };
  return (
    <Flex flexDir={"column"}>
      <FieldArray name="sumary">
        {(arrayHelpers) => {
          console.log(arrayHelpers);
          return (
            <>
              <FormLabel htmlFor="sumary">Sumario</FormLabel>
              <Flex flexDir={"column"} gap={"1rem"}>
                  <Flex gap={"1rem"}>
                <Select onChange={handleChange} name="type" value={value.type}>
                  <option defaultChecked disabled={value.type ? true : false}>
                    Seleccionar tipo
                  </option>
                  <option value={"ordenanza"}>Ordenanza</option>
                  <option value={"decreto"}>Decreto</option>
                  <option value={"acta"}>Acta de sesión</option>
                </Select>
                <Input
                  id="sumary"
                  onChange={handleChange}
                  value={value.date}
                  name="date"
                  type={"date"}
                />
                </Flex>
                <Flex gap={"1rem"}>
                  <Input
                    id="sumary"
                    onChange={handleChange}
                    value={value.title}
                    name="title"
                  />
                  <Button
                    type="button"
                    onClick={() => handleClick(arrayHelpers)}
                  >
                    Cargar
                  </Button>
                </Flex>
              </Flex>
              <List paddingBlock={"0.5rem"}>
                {arrayHelpers?.form?.values?.sumary?.map((item, idx) => {
                  const data = Object.values(item);
                  return (
                    <ListItem
                      key={idx}
                      listStylePos={"inside"}
                      listStyleType={"initial"}
                    >
                      {data.map((item, idx) => (
                        <span>{item} </span>
                      ))}
                    </ListItem>
                  );
                })}
              </List>
            </>
          );
        }}
      </FieldArray>
    </Flex>
  );
};

const UploadComponent = () => {
  const [doc, setDoc] = useState(null);
  const handleChange = (e) => {
    try {
        e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onloadend = () => {
      setDoc(
        { file: file, image: reader.result},
      );
    };
    reader.readAsDataURL(file);
    console.log(doc)
    } catch (error) {
        console.log(error)
    }
  };

  return (
    <FormLabel htmlFor="uploadFile">
      <Input
        id="uploadFile"
        type={"file"}
        accept="application/pdf"
        display={"none"}
        onChange={handleChange}
      />
      <Flex
        color={"gray.600"}
        gap={"1rem"}
        alignItems={"center"}
        justifyContent={"center"}
        border={"2px dotted gray"}
        padding={"1rem"}
        rounded={"md"}
      >
        {!doc ? (
            <>
            <DownloadIcon />
            <Text>Subir gaceta en PDF</Text>
            </>
        ) : <>
        <Box w={"1.5rem"}h={"1.5rem"}>
        <DocsIcon />
        </Box>
        <Text>{doc?.file?.name}</Text>
        </>}
      </Flex>
    </FormLabel>
  );
};
