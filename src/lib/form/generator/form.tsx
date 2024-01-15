import * as T from "../type";

import { defToShape } from "../utils";
import { FormWrapperLegacy } from "../form-wrapper";
import FormUIGenerator from "./ui";

const FormGeneratorLegacy =
  (p: T.FormUIGeneratorProps) =>
  <FormShape, Out = any>(
    def: T.FormDef<FormShape>[],
    asyncCall?: (data: FormShape) => Promise<Out>,
    options: Partial<T.FormWrapperOptions> = {}
  ) => {
    const shape = defToShape(def);
    const ui = FormUIGenerator(p)(def);

    return FormWrapperLegacy(ui, shape, asyncCall, options);
  };

export default FormGeneratorLegacy;
