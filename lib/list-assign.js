import React from "../_snowpack/pkg/react.js";
const ListUnit = (UnitUI) => ({
  i,
  value,
  updatePromise
}) => {
  const [isChecked, setChecked] = React.useState(!!value.assigned);
  const [isLoading, setLoading] = React.useState(false);
  const [assigned, setAssigned] = React.useState(value.assigned);
  const handleClick = () => {
    if (isLoading === true) {
      console.warn("this action is blocked since the promise is still working");
    }
    setLoading(true);
    updatePromise(value.id, assigned).then((x) => {
      setChecked(!isChecked);
      setLoading(false);
      setAssigned(Boolean(x));
    });
  };
  return /* @__PURE__ */ React.createElement(UnitUI, {
    isChecked,
    onChange: handleClick,
    isLoading,
    label: value.name
  });
};
const ListAssign = (ListWrapperUI, UnitUI) => {
  const ListUnitUI = ListUnit(UnitUI);
  return ({
    data,
    updatePromise
  }) => {
    return /* @__PURE__ */ React.createElement(ListWrapperUI, null, data.map((value, i) => /* @__PURE__ */ React.createElement(ListUnitUI, {
      key: i,
      i,
      value,
      updatePromise
    })));
  };
};
export default ListAssign;
