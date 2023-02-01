import React from "react";
import { fetchQuery } from "../../utils/fetchMethods";
import schema from "../../utils/schema";
import { Form, Formik } from "formik";
import { Box } from "@chakra-ui/react";
import InputField from "../../components/Forms/InputField";
import TextAreaField from "../../components/Forms/TextAreaField";

const Module = ({ data, rawAttributes }) => {
  console.log(data);
  return (
    <Box display="flex" gap="1rem" flexDir="column">
      <Formik initialValues={data}>
        <Form
          style={{ background: "white", borderRadius: "15px", padding: "2rem" }}
        >
          {rawAttributes.map(({ field, type }) => {
            if (["string"].includes(type.toLowerCase())) {
              return <InputField name={field} label={field} />;
            }
            if (["text"].includes(type.toLowerCase())) {
              return <TextAreaField name={field} label={field} />;
            }
          })}
        </Form>
      </Formik>
    </Box>
  );
};

export default Module;

export async function getServerSideProps(context) {
  const { get, raw } = schema.collections[context.query.view].methods;
  try {
    const { data } = await fetchQuery(`${get}/${context.query.id}`, "get");
    if (data.length <= 0) {
      throw new Error();
    }
    const { data: rawAttributes } = await fetchQuery(raw, "get");
    return {
      props: { data, rawAttributes }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        permanent: false,
        destination: "/dashboard",
      },
    };
  }
}
