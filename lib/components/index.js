import React from "../../_snowpack/pkg/react.js";
export const LoadComponentAsync = (Spinner) => ({
  Component,
  getData
}) => {
  const [data, setData] = React.useState(void 0);
  if (data === void 0) {
    getData().then((data2) => setData(data2));
    return /* @__PURE__ */ React.createElement(Spinner, null);
  }
  return /* @__PURE__ */ React.createElement(Component, {
    data
  });
};
