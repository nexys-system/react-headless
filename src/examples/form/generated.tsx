import React from 'react';

import FormUIGenerate from '../../lib/form/ui-generator';

import { FormDataShape } from './type';

import * as UI from '../../components/form/inputs';
import { FormDef, FormUIType } from '../../lib/form/type';

// form shape - should match the type

const def: FormDef<FormDataShape>[] = [
  { name: 'firstName', uiType: FormUIType.Text, optional: false },
  { name: 'lastName', uiType: FormUIType.Text, optional: true }
];

const FormUIGenerated = FormUIGenerate(UI.InputWrapper, UI.InputGeneric, () => (
  <button className="btn btn-primary" type="submit">
    Send
  </button>
))(def);

export default FormUIGenerated;
