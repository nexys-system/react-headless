import React from "../../_snowpack/pkg/react.js";
import {render} from "../../_snowpack/pkg/@testing-library/react.js";
import "../../_snowpack/pkg/@testing-library/jest-dom.js";
const customRender = (ui) => {
  const Wrapper = ({children}) => /* @__PURE__ */ React.createElement(React.Fragment, null, children);
  const utils = render(ui, {
    wrapper: Wrapper
  });
  return utils;
};
export * from "../../_snowpack/pkg/@testing-library/react.js";
export {customRender as render};
