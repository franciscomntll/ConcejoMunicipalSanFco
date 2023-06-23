import React, { useState } from "react";
import { GridGacetas, DataTable, Switch } from "@components/index";

const Gaceta = () => {
  const options = [
    {
      label: "Cuadricula",
      type: "grid",
    },
    {
      label: "Tabla",
      type: "datatable",
    }
  ];
  const [selected, setSelected] = useState(options[0]?.type);
  return (
    <div className="container px-5 py-10 w-full mx-auto">
      <div className="mx-auto inset-x-0 flex flex-col items-center justify-center text-center gap-3">
        <h1 className="text-6xl font-black text-transparent bg-gradient-to-r from-primary to-blue-500 bg-clip-text py-2">
          Explora nuestra gaceta municipal
        </h1>
        <p className="text-sm">
          Encuentra aquí las gacetas del Concejo Municipal, accede a la
          información actualizada y mantente al tanto de las novedades.
        </p>
        <div className="flex items-center justify-center gap-2">
          <Switch
            value={selected}
            onChange={(value) => setSelected(value)}
            options={options.map((option) => option.type)}
          />
        </div>
      </div>
      <div>
        {(() => {
          switch (selected) {
            case "datatable":
              return <DataTable />;
              break;
            case "grid":
              return <GridGacetas />;
            default:
              break;
          }
        })()}
      </div>
    </div>
  );
};

export default Gaceta;
