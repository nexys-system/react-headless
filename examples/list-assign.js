import React from "../_snowpack/pkg/react.js";
import {delay} from "../lib/utils.js";
import ListAssign from "../components/list-assign.js";
const dataIn = [
  {id: 1, assigned: false, name: "Elephant"},
  {id: 2, assigned: true, name: "Lion"}
];
export default () => {
  const [data, setData] = React.useState(dataIn);
  const onUpdate = async (id) => {
    await delay(500);
    const d = data.map((d2) => {
      if (d2.id === id) {
        return {...d2, assigned: !d2.assigned};
      }
      return d2;
    });
    setData([...d]);
  };
  return /* @__PURE__ */ React.createElement(ListAssign, {
    data,
    updatePromise: onUpdate
  });
};
