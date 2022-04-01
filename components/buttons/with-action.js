import React from "../../_snowpack/pkg/react.js";
import BtnWithActionGeneric from "../../lib/buttons/with-action.js";
const Btn = ({children, disabled, onClick}) => {
  return /* @__PURE__ */ React.createElement("button", {
    className: "btn btn-outline-primary",
    disabled,
    onClick
  }, children);
};
const BtnWithAction = BtnWithActionGeneric(Btn);
export default BtnWithAction;
