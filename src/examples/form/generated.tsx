import { FormDataShape } from "./type";

import { FormDef, FormUIType } from "../../lib/form/type";
import PreForm from "../../components/form/generator";

import { apiCall } from "./utils";

// options
export const continents = [
  { id: 1, name: "Asia" },
  { id: 2, name: "Africa" },
  { id: 3, name: "Europe" },
  { id: 4, name: "North America" },
  { id: 5, name: "South America" },
  { id: 6, name: "Australia/Oceania" },
  { id: 7, name: "Antarctica" },
];

const ages = [
  { id: 1, name: "<20" },
  { id: 2, name: "20-40" },
  { id: 3, name: "40-60" },
  { id: 4, name: "60+" },
];

const methods = [
  { id: "GET", name: "GET" },
  { id: "POST", name: "POST" },
];
///

const def: FormDef<FormDataShape>[] = [
  {
    name: "firstName",
    uiType: FormUIType.Text,
    optional: false,
    placeholder: "First Name",
  },
  {
    label: "Last Name",
    placeholder: "Enter your last name here",
    name: "lastName",
    uiType: FormUIType.Text,
    optional: true,
  },
  {
    label: "Continent",
    placeholder: "Continent",
    name: "continent",
    uiType: FormUIType.SelectObjectNumber,
    optional: false,
    options: continents,
  },
  {
    label: "Age",
    name: "age",
    uiType: FormUIType.SelectNumber,
    optional: false,
    options: ages,
  },
  {
    label: "Method",
    name: "method",
    uiType: FormUIType.Select,
    optional: false,
    options: methods,
  },
  {
    label: "Birthdate",
    name: "birthdate",
    uiType: FormUIType.Date,
    optional: false,
  },
  {
    label: "Appointment",
    name: "appointment",
    uiType: FormUIType.DateTime,
    optional: true,
  },
  {
    label: "Lunch Time",
    name: "lunchTime",
    uiType: FormUIType.Time,
    optional: true,
  },
];

export default PreForm(def, apiCall);
