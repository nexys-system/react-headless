import React from "../../_snowpack/pkg/react.js";
export var CopyState;
(function(CopyState2) {
  CopyState2[CopyState2["idle"] = 1] = "idle";
  CopyState2[CopyState2["progress"] = 2] = "progress";
  CopyState2[CopyState2["copied"] = 3] = "copied";
})(CopyState || (CopyState = {}));
export const Block = ({code}) => /* @__PURE__ */ React.createElement("code", null, code);
export const Statement = (Block2) => ({
  code,
  copyToClipboard = false
}) => {
  const [copyState, setCopyState] = React.useState(1);
  const handleClick = async () => {
    setCopyState(2);
    await navigator.clipboard.writeText(code);
    setCopyState(3);
  };
  return /* @__PURE__ */ React.createElement(Block2, {
    handleClick,
    code,
    copyState,
    copyToClipboard
  });
};
