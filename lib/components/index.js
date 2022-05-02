import React from "../../_snowpack/pkg/react.js";
export const LoadDataAsync = (Spinner) => ({
  Component,
  getData,
  ComponentOnFail
}) => {
  const [data, setData] = React.useState(void 0);
  const [error, setError] = React.useState();
  if (error) {
    console.error("Data load failed", error);
    if (ComponentOnFail) {
      return /* @__PURE__ */ React.createElement(ComponentOnFail, {
        error
      });
    }
  }
  if (data === void 0) {
    getData().then((data2) => setData(data2)).catch((err) => setError(err));
    return /* @__PURE__ */ React.createElement(Spinner, null);
  }
  return /* @__PURE__ */ React.createElement(Component, {
    data
  });
};
