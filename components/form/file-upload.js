import React from "../../_snowpack/pkg/react.js";
import Spinner from "../spinner.js";
import FileUploadHeadless from "../../lib/form/file-upload.js";
const FileComponent = ({onChange}) => /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("span", null, "Select a file"), /* @__PURE__ */ React.createElement("input", {
  type: "file",
  className: "hidden",
  onChange
}));
export default FileUploadHeadless(FileComponent, Spinner);
