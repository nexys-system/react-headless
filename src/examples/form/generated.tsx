import { FormDataShape } from './type';

import { FormDef, FormUIType } from '../../lib/form/type';
import PreForm from '../../components/form/generator';

import { apiCall } from './utils';

const def: FormDef<FormDataShape>[] = [
  { name: 'firstName', uiType: FormUIType.Text, optional: false },
  { name: 'lastName', uiType: FormUIType.Text, optional: true }
];

export default PreForm(def, apiCall);
