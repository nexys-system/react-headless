import * as T from '../type';

import { defToShape } from '../utils';
import FormUIGenerator, { FormUIGeneratorProps } from './ui';
import FormWrapper from '../form-wrapper';

const FormGenerator =
  (p: FormUIGeneratorProps) =>
  <FormShape, Out = any>(
    def: T.FormDef<FormShape>[],
    asyncCall?: (data: FormShape) => Promise<Out>,
    options: { resetAfterSubmit?: boolean } = {}
  ) => {
    const shape = defToShape(def);
    const ui = FormUIGenerator(p)(def);

    return FormWrapper(ui, shape, asyncCall, options);
  };

export default FormGenerator;
