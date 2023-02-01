import {
  FormLabel,
  Textarea,
  Flex
} from "@chakra-ui/react";
import { useField } from "formik";

const TextAreaField = (props) => {
    const [fields, meta, helpers] = useField({...props})
  return (
    <Flex flexDir={"column"}>
      <FormLabel fontSize={"sm"} htmlFor={props.name}>{props.label}</FormLabel>
      <Textarea id={props.name} {...props} onChange={(e) => helpers.setValue(e.target.value)} value={fields.value} />
    </Flex>
  );
};

export default TextAreaField;
