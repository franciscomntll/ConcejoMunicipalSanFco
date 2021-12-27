import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Flex
} from "@chakra-ui/react";
import { useField } from "formik";

const InputField = (props) => {
    const [fields, meta, helpers] = useField({...props})
  return (
    <Flex flexDir={"column"}>
      <FormLabel fontSize={"sm"} htmlFor={props.name}>{props.label}</FormLabel>
      <Input  id={props.name} {...props} onChange={(e) => helpers.setValue(e.target.value)} value={fields.value} />
    </Flex>
  );
};

export default InputField;
