import React from 'react';

import FormWrapper from '../../lib/form/form-wrapper';
import { Form } from './type';
import FormUI from './ui';

// form shape - should match the type
const shape = { firstName: {}, lastName: { optional: true } };

const Form = FormWrapper<Form>(FormUI, shape, undefined, () =>
  alert('form sent successfully')
);

export default () => (
  <>
    <h1>Form</h1>

    <Form />
  </>
);
