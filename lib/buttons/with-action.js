import React from "../../_snowpack/pkg/react.js";
export var ActionState;
(function(ActionState2) {
  ActionState2[ActionState2["idle"] = 0] = "idle";
  ActionState2[ActionState2["loading"] = 1] = "loading";
  ActionState2[ActionState2["success"] = 2] = "success";
  ActionState2[ActionState2["failed"] = 3] = "failed";
})(ActionState || (ActionState = {}));
const ApplyActionButton = (Btn) => ({
  label,
  asyncAction,
  LoadingContent,
  SuccessContent,
  FailedContent
}) => {
  const [state, setState] = React.useState(0);
  const [data, setData] = React.useState(void 0);
  const handleClick = async () => {
    setState(1);
    try {
      const r = await asyncAction();
      setData(r);
      setState(2);
      return;
    } catch (err) {
      setState(3);
      return;
    }
  };
  return /* @__PURE__ */ React.createElement(Btn, {
    disabled: state === 1,
    onClick: handleClick
  }, /* @__PURE__ */ React.createElement(React.Fragment, null, state === 0 && label, state === 1 && /* @__PURE__ */ React.createElement(LoadingContent, null), state === 2 && /* @__PURE__ */ React.createElement(SuccessContent, {
    data
  }), state === 3 && /* @__PURE__ */ React.createElement(FailedContent, null)));
};
export default ApplyActionButton;
