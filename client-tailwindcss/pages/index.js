import React from "react";
import { SectionBlock } from "../components/SectionBlock";
import { YoutubeBlock } from "../components/YoutubeBlock";

const HomePage = ({ fullWidth }) => {
  return (
    <div className="w-full mx-auto inset-x-0 px-5 overflow-x-hidden">
      <SectionBlock />
      <SectionBlock />
      <YoutubeBlock fullWidth={fullWidth} />
    </div>
  );
};

export default HomePage;
