import React from 'react';

import FormWrapper from '../../lib/form/form-wrapper';
import { delay } from '../../lib/utils';
import { FormDataShape } from './type';
import FormUI from './ui';

// form shape - should match the type
const shape = { firstName: {}, lastName: { optional: true } };

interface Out {
  id: number;
}

const cartoonCharacters = ['mickey', 'minnie', 'donald', 'popeye'];

const apiCall = async (data: FormDataShape): Promise<Out> => {
  await delay();

  if (cartoonCharacters.includes(data.firstName.toLowerCase())) {
    return Promise.reject({
      firstName: ['Cartoon character names are not allowed']
    });
  }

  return { id: 2 };
};
const onSuccess = (a: FormDataShape, b: Out) =>
  alert('form sent successfully' + b.id + ' ' + JSON.stringify(a));

const Form = FormWrapper<FormDataShape, Out>(FormUI, shape, apiCall);

export default () => (
  <>
    <h1>Form</h1>

    <p>
      Form demo.{' '}
      <small>
        To simulate a form rejection insert one of the following first names:{' '}
        <code>{JSON.stringify(cartoonCharacters)}</code>
      </small>
    </p>

    <Form onSuccess={onSuccess} onErrors={errors => ({ errors })} />
  </>
);
