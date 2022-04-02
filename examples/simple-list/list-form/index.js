import React from "../../../_snowpack/pkg/react.js";
import Icon from "../../../components/icon.js";
import Form from "./form.js";
import List from "./list.js";
export default () => {
  const [data, setData] = React.useState([
    {id: 1, title: "item #1", subtitle: "sub#1"},
    {id: 2, title: "item #2", subtitle: "sub#2"}
  ]);
  const [isInsert, setIsInsert] = React.useState(false);
  const handleRemove = (id) => {
    if (confirm("Are you sure you would like to delete that entry?")) {
      setData(data.filter((x) => x.id !== id));
    }
  };
  const handleSuccess = (d, id) => {
    const item = {id, title: d.name, subtitle: d.description};
    setData([...data, item]);
    setIsInsert(false);
  };
  if (isInsert) {
    return /* @__PURE__ */ React.createElement(Form, {
      onSuccess: handleSuccess
    });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "List with Form"), /* @__PURE__ */ React.createElement(List, {
    data,
    onRemove: handleRemove
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsInsert(true),
    type: "button",
    className: "btn btn-primary"
  }, /* @__PURE__ */ React.createElement(Icon, {
    name: "plus"
  })));
};
