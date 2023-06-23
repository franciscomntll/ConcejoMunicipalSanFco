import { ThemeProvider, createTheme } from "@mui/material/styles";
import MUIDataTable from "mui-datatables";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { motion } from "framer-motion";

const columns = [
  {
      name: "id",
      label: "ID",
      options: {
          filter: false,
          sort: false,
          display: false,
      },
  },
  {
      name: "title",
      label: "Titulo",
      options: {
          filter: false,
          sort: true,
      },
  },
  {
      name: "number",
      label: "Numero",
      options: {
          filter: false,
          sort: true,
      }
  },
  {
      name: "datePublished",
      label: "Fecha de publicacion",
      options: {
          filter: false,
          sort: true,
      }
  }
]

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];

const muiCache = createCache({
  key: "mui-datatables",
  prepend: true,
});

const getMuiTheme = () =>
  createTheme({
    components: {
      MuiCheckbox: {
        styleOverrides: {
          root: {
            borderRadius: "5px",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            boxShadow: "none",
          },
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontFamily: "Mulish !important",
          },
          body1: {
            fontFamily: "Mulish !important",
          },
        },
      },
    },
  });
export const DataTable = () => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      className="w-full border p-3 rounded-xl my-10"
    >
      <CacheProvider value={muiCache}>
        <ThemeProvider theme={getMuiTheme()}>
          <MUIDataTable
            data={data}
            columns={columns}
            options={{
              filterType: "checkbox",
              customToolbarSelect: null,
              selectableRows: "single",
            }}
          />
        </ThemeProvider>
      </CacheProvider>
    </motion.div>
  );
};
