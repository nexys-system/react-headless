import { FormDataShape } from "./type";

import { FormDef, FormUIType } from "../../lib/form/type";
import PreForm from "../../components/form/generator";

import { apiCall } from "./utils";

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
  },
  {
    label: "Age",
    name: "age",
    uiType: FormUIType.SelectNumber,
    optional: false,
  },
  {
    label: "Method",
    name: "method",
    uiType: FormUIType.Select,
    optional: false,
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
];

export default PreForm(def, apiCall);
