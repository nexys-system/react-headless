import React from "../../_snowpack/pkg/react.js";
const ToggleHeadless = (structure, Form, View, LayoutView, LayoutForm) => ({data: dataIn}) => {
  const [data, setData] = React.useState(dataIn);
  const [isForm, setIsForm] = React.useState(false);
  if (isForm) {
    return /* @__PURE__ */ React.createElement(LayoutForm, {
      setIsForm
    }, /* @__PURE__ */ React.createElement(Form, {
      data: {dataIn: data},
      onSuccess: (d) => {
        setData(d);
        setIsForm(false);
      }
    }));
  }
  return /* @__PURE__ */ React.createElement(LayoutView, {
    setIsForm
  }, /* @__PURE__ */ React.createElement(View, {
    data,
    structure
  }));
};
export default ToggleHeadless;
