import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Datatable from "../../components/Datatable";
import { LoadingContextProvider } from "../../context";
import { fetchQuery } from "../../utils/fetchMethods";
import schema from "../../utils/schema";

const Dashboard = () => {
  const { setLoading } = LoadingContextProvider();
  const [view, setView] = useState("table"); // table, edit, create

  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  const router = useRouter();
  const mappingRawToColumns = (rawObject) => {
    return Object.values(rawObject).map(({field}) => ({
      Header: field,
      accessor: field,
    }));
  };

  useEffect(() => {
    setLoading(true);
    // Get Columns
    const { raw, get } =
      schema.collections[router.query["view"]]?.methods || {};

    raw
      ? fetchQuery(raw, "get").then(({ data }) =>
          setColumns(mappingRawToColumns(data))
        )
      : setColumns([]);

    // Get Data
    get
      ? fetchQuery(get, "get").then(({ data }) => setData(data))
      : setData([]);
    setLoading(false);
  }, [router.query]);

  const onClickCell = (id) => {
    router.push(`/dashboard/${id}?view=${router.query["view"]}`);
  };
  return <Datatable onClickCell={onClickCell} columns={columns} data={data} />;
};

export default Dashboard;
