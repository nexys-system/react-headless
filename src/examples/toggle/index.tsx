import React from 'react';

import { delay } from '../../lib/utils';

import { ToggleFromDef } from '../../components/toggle';
import { FormUIType, FormViewDef } from '../../lib/form/type';

interface Data {
  firstName: string;
  lastName: string;
}

interface Out {
  id: number;
}

const apiCall = async (): Promise<Out> => {
  await delay();

  return { id: 2 };
};

const def: FormViewDef<Data>[] = [
  {
    label: 'First Name',
    name: 'firstName',
    uiType: FormUIType.Text,
    optional: false
  },
  {
    label: 'Last Name',
    name: 'lastName',
    uiType: FormUIType.Text,
    optional: true
  }
];

const Toggle = ToggleFromDef(def, apiCall);

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
