import React from "../../_snowpack/pkg/react.js";
import BtnWithAction from "../../components/buttons/with-action.js";
import Spinner from "../../components/spinner.js";
import {delay} from "../../lib/utils.js";
const SuccessContent = ({data}) => /* @__PURE__ */ React.createElement("span", null, "Success, ", /* @__PURE__ */ React.createElement("code", null, data.message));
const FailedContent = () => /* @__PURE__ */ React.createElement("span", null, "Success");
const LoadingContent = () => /* @__PURE__ */ React.createElement(Spinner, null);
const applyAction = async () => {
  await delay(1500);
  return Promise.resolve({message: "action executed"});
};
export default () => {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Button with action"), /* @__PURE__ */ React.createElement(BtnWithAction, {
    asyncAction: applyAction,
    label: "Click me",
    SuccessContent,
    LoadingContent,
    FailedContent
  }));
};
