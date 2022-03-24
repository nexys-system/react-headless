import React from "../../_snowpack/pkg/react.js";
import {
  Statement as StatementGeneric,
  CopyState
} from "../../lib/code/index.js";
const Block = ({
  code,
  copyState,
  copyToClipboard,
  handleClick
}) => {
  const className = "cursor-pointer rounded p-1 pb-1 px-3 text-sm text-gray-300 hover:text-white " + (copyState === CopyState.progress ? "bg-yellow-500" : "bg-black");
  return /* @__PURE__ */ React.createElement("span", {
    onClick: copyToClipboard ? handleClick : void 0,
    className
  }, /* @__PURE__ */ React.createElement("code", null, code, " "), copyToClipboard && /* @__PURE__ */ React.createElement("button", {
    disabled: copyState === CopyState.progress,
    className: "btn btn-sm"
  }, copyState !== CopyState.copied && /* @__PURE__ */ React.createElement("span", null, "Copy"), copyState === CopyState.copied && /* @__PURE__ */ React.createElement("span", null, "Copied")));
};
export const Statement = StatementGeneric(Block);
