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
];

export default PreForm(def, apiCall);
