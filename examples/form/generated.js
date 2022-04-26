import {FormUIType} from "../../lib/form/type.js";
import PreForm from "../../components/form/generator.js";
import {apiCall} from "./utils.js";
const def = [
  {name: "firstName", uiType: FormUIType.Text, optional: false},
  {name: "lastName", uiType: FormUIType.Text, optional: true}
];
export default PreForm(def, apiCall);
