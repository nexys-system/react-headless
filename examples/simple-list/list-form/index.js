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
  const [edit, setEdit] = React.useState(void 0);
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
  const handleEdit = (d) => {
    const data2 = {name: d.title, description: d.subtitle};
    setEdit({data: data2, id: d.id});
  };
  const handleSuccessEdit = (d) => {
    const newData = data.map((x) => {
      if (x.id === edit.id) {
        return {title: d.name, subtitle: d.description, id: edit.id};
      }
      return x;
    });
    setData([...newData]);
    setEdit(void 0);
  };
  if (edit) {
    return /* @__PURE__ */ React.createElement(Form, {
      onSuccess: handleSuccessEdit,
      data: {dataIn: edit.data}
    });
  }
  if (isInsert) {
    return /* @__PURE__ */ React.createElement(Form, {
      onSuccess: handleSuccess
    });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "List with Form"), /* @__PURE__ */ React.createElement(List, {
    data,
    onRemove: handleRemove,
    onEdit: handleEdit
  }), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("button", {
    onClick: () => setIsInsert(true),
    type: "button",
    className: "btn btn-primary"
  }, /* @__PURE__ */ React.createElement(Icon, {
    name: "plus"
  })));
};
