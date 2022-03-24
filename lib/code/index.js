import React from "../../_snowpack/pkg/react.js";
import {truncateString} from "./utils.js";
export var CopyState;
(function(CopyState2) {
  CopyState2[CopyState2["idle"] = 1] = "idle";
  CopyState2[CopyState2["progress"] = 2] = "progress";
  CopyState2[CopyState2["copied"] = 3] = "copied";
})(CopyState || (CopyState = {}));
export const Statement = (Block) => ({
  code,
  copyToClipboard = false,
  truncate
}) => {
  const [copyState, setCopyState] = React.useState(1);
  const handleClick = async () => {
    setCopyState(2);
    await navigator.clipboard.writeText(code);
    setCopyState(3);
  };
  const c = truncate === void 0 ? code : truncateString(code, truncate);
  return /* @__PURE__ */ React.createElement(Block, {
    handleClick,
    code: c,
    copyState,
    copyToClipboard
  });
};
