import React from 'react';

import FormWrapper from '../../lib/form/form-wrapper';

import { FormDataShape, Out } from './type';
import FormUI from './ui';
import FormUIGenerated from './generated';
import { apiCall, onSuccess, cartoonCharacters, shape } from './utils';

const Form = FormWrapper<FormDataShape, Out>(FormUI, shape, apiCall);

const FormWithUIGenerated = FormWrapper<FormDataShape, Out>(
  FormUIGenerated,
  shape,
  apiCall
);

export default () => (
  <>
    <h1>Form</h1>

    <p>
      Form demo.&nbsp;
      <small>
        To simulate a form rejection insert one of the following first names:{' '}
        <code>{JSON.stringify(cartoonCharacters)}</code>
      </small>
    </p>

    <Form onSuccess={onSuccess} onErrors={errors => ({ errors })} />

    <hr />

    <h3>Form Generated</h3>

    <FormWithUIGenerated
      onSuccess={onSuccess}
      onErrors={errors => ({ errors })}
    />
  </>
);
