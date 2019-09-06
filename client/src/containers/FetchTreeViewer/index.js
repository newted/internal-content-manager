import React from "react";
import JSONTree from "react-json-tree";
import theme from "./flatTheme";

const data = {
  name: "Youtube",
  url: "www.youtube.com"
};

const FetchTreeViewer = ({ model }) => {
  return <JSONTree data={data} theme={theme} invertTheme={true} />;
};

export default FetchTreeViewer;
