import {defToShape} from "../utils.js";
import FormUIGenerator from "./ui.js";
import FormWrapper from "../form-wrapper.js";
const FormGenerator = (p) => (def, asyncCall, options = {}) => {
  const shape = defToShape(def);
  const ui = FormUIGenerator(p)(def);
  return FormWrapper(ui, shape, asyncCall, options);
};
export default FormGenerator;
