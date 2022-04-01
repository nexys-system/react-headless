import React from "../_snowpack/pkg/react.js";
import {saveByteArray} from "../lib/utils.js";
const downloadTxt = () => {
  saveByteArray("hellow world", "out.txt");
};
const downloadCsv = () => {
  const csv = [
    ["col 1", "col 2", "col 3"],
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  const csvString = csv.map((row) => row.join(",")).join("\n");
  saveByteArray(csvString, "out.csv", "text/csv");
};
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Download"), /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-outline-primary btn-sm",
    onClick: downloadTxt
  }, "Donwload txt")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-outline-primary btn-sm",
    onClick: downloadCsv
  }, "Donwload CSV"))));
};
