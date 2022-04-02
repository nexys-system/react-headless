import React from 'react';
import { FormUIProps } from '../../lib/form/type';

import * as Inputs from '../../components/form/inputs';
import FormWrapper from '../../lib/form/form-wrapper';
import Icon from '../../components/icon';

export interface FormDataShape {
  name: string;
}

const FormUI = ({
  form,
  setForm,
  loading,
  errors
}: FormUIProps<FormDataShape>) => {
  return (
    <>
      <div className="input-group mb-3">
        <Inputs.Input
          value={form.name}
          onChange={name => setForm({ ...form, name })}
          disabled={loading}
          placeholder={'Name'}
          errors={errors['name']}
        />
        <button
          disabled={loading || form.name === '' || !form.name}
          className="btn btn-outline-primary"
          type="button"
          id="button-addon1"
        >
          <Icon name="plus" /> Add
        </button>
      </div>
    </>
  );
};

const shape = { name: {} };

const apiCall = async (a: FormDataShape) =>
  Promise.resolve(Math.random() * 100);

const Form = FormWrapper<FormDataShape, number>(FormUI, shape, apiCall, {
  resetAfterSubmit: true
});

export default Form;
