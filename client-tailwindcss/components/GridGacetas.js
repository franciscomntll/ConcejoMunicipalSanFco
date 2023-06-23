import { Card } from "@components/Card";
import { Pagination, Switch } from "@mui/material";
import { motion } from "framer-motion";

export const GridGacetas = () => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
      }}
      className="w-full  p-3"
    >
      <div
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 1fr))" }}
        className="grid gap-10 py-10"
      >
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <div className="flex items-center justify-center">
        <Pagination count={10} />
      </div>
    </motion.div>
  );
};
