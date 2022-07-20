import Countries from "countries-list";

import List from "../../components/table";
import { Definition } from "../../lib/types";

const countries: Countries.Country[] = Object.values(Countries.countries).sort(
  (a, b) => a.name.localeCompare(b.name)
);

const def: Definition<Countries.Country> = [
  { name: "name", label: "Country name" },
  { name: "capital", label: "Capital" },
  { name: "emoji", label: "Emoji" },
];

const CountryList = (): JSX.Element => (
  <List config={{ search: true }} data={countries} def={def} />
);

export default CountryList;
