import React from 'react';

import FormWrapper from '../../lib/form/form-wrapper';
import { delay } from '../../lib/utils';
import FormUI from '../form/ui';
import { ViewStructureUnit } from '../../lib/view';
import PreToggle from '../../components/toggle';

interface Data {
  firstName: string;
  lastName: string;
}

interface Out {
  id: number;
}

const structure: ViewStructureUnit<Data>[] = [
  { label: 'First Name', value: 'firstName' },
  { label: 'Last Name', value: 'lastName' }
];

const apiCall = async (): Promise<Out> => {
  await delay();

  return { id: 2 };
};

// form shape - should match the type
const shape = { firstName: {}, lastName: { optional: true } };

const Toggle = PreToggle(
  structure,
  FormWrapper<Data, Out>(FormUI, shape, apiCall)
);

const data: Data = {
  firstName: 'John',
  lastName: 'Doe'
};

export default () => (
  <>
    <h1>Toggle</h1>
    <Toggle data={data} />
  </>
);
