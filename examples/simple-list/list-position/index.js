import React from "../../../_snowpack/pkg/react.js";
import List from "./list.js";
export default () => {
  const [data, setData] = React.useState([
    {id: 1, title: "item #1"},
    {id: 2, title: "item #2"},
    {id: 3, title: "item #3"},
    {id: 4, title: "item #4"},
    {id: 5, title: "item #5"}
  ]);
  const handleMove = (id, move) => {
    const elementIdx = data.findIndex((x) => x.id === id);
    if (elementIdx < 0) {
      throw Error("element could not be found");
    }
    const newIdx = elementIdx + move;
    const element = data[elementIdx];
    data.splice(elementIdx, 1);
    data.splice(newIdx, 0, element);
    setData([...data]);
  };
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h2", null, "List Position"), /* @__PURE__ */ React.createElement(List, {
    data,
    onMove: handleMove
  }));
};
