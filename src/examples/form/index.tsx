import React from 'react';

import FormWrapper from '../../lib/form/form-wrapper';
import { delay } from '../utils';
import { FormDataShape } from './type';
import FormUI from './ui';

// form shape - should match the type
const shape = { firstName: {}, lastName: { optional: true } };

interface Out {
  id: number;
}

const apiCall = async (): Promise<Out> => {
  await delay();
  return { id: 2 };
};
const onSuccess = (a: FormDataShape, b: Out) =>
  alert('form sent successfully' + b.id + ' ' + JSON.stringify(a));

const Form = FormWrapper<FormDataShape, Out>(FormUI, shape, apiCall, onSuccess);

export default () => (
  <>
    <h1>Form</h1>

    <Form />
  </>
);
