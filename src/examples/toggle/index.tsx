import React from "react";

import { delay } from "../../lib/utils";

import { ToggleFromDef } from "../../components/toggle";
import { FormUIType, FormViewDef } from "../../lib/form/type";
import { continents } from "../form/generated";

const continent = continents[0];

interface Data {
  firstName: string;
  lastName: string;
  continent: { id: number; name: string };
}

interface Out {
  id: number;
}

const apiCall = async (): Promise<Out> => {
  await delay();

  return { id: 2 };
};

const def: FormViewDef<Data>[] = [
  {
    label: "First Name",
    name: "firstName",
    uiType: FormUIType.Text,
    optional: false,
  },
  {
    label: "Last Name",
    name: "lastName",
    uiType: FormUIType.Text,
    optional: true,
  },
  {
    label: "Continent",
    name: "continent",
    uiType: FormUIType.SelectObjectNumber,
    optional: false,
    render: (x) => x.continent.name,
  },
];

const Toggle = ToggleFromDef(def, apiCall);

const data: Data = {
  firstName: "John",
  lastName: "Doe",
  continent,
};

export default () => (
  <>
    <h1>Toggle</h1>
    <Toggle data={data} options={{ continent: continents }} />
  </>
);
