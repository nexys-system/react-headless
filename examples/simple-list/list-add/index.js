import React from "../../../_snowpack/pkg/react.js";
import Form from "./form.js";
import List from "./list.js";
export default () => {
  const [data, setData] = React.useState([
    {id: 1, title: "item #1"},
    {id: 2, title: "item #2"}
  ]);
  const handleRemove = (id) => {
    if (confirm("Are you sure you would like to delete that entry?")) {
      setData(data.filter((x) => x.id !== id));
    }
  };
  const handleSuccess = (d, id) => {
    const item = {id, title: d.name};
    setData([...data, item]);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "List with simple insert"), /* @__PURE__ */ React.createElement(List, {
    data,
    onRemove: handleRemove
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement(Form, {
    onSuccess: handleSuccess
  }));
};
