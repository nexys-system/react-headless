import React from "../_snowpack/pkg/react.js";
import List from "../components/list/index.js";
import Countries from "../_snowpack/pkg/countries-list.js";
const countries = Object.values(Countries.countries).sort((a, b) => a.name.localeCompare(b.name));
const def = [
  {name: "name", label: "Country name"},
  {name: "capital", label: "Capital"},
  {name: "emoji", label: "Emoji"}
];
const CountryList = () => /* @__PURE__ */ React.createElement(List, {
  config: {search: true},
  data: countries,
  def
});
export default CountryList;
