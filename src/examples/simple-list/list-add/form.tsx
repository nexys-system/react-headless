import React from "react";
import { FormUIProps } from "../../../lib/form/type";

import * as Inputs from "../../../components/form/inputs";

import Icon from "../../../components/icon";
import { FormWrapperLegacy } from "../../../lib/form/form-wrapper";

export interface FormDataShape {
  name: string;
}

const FormUI = ({
  form,
  setForm,
  loading,
  onSubmit,
  errors,
}: FormUIProps<FormDataShape>) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="input-group mb-3">
        <Inputs.Input
          value={form.name}
          onChange={(name) => setForm({ ...form, name })}
          disabled={loading}
          placeholder={"Name"}
          errors={errors["name"]}
        />
        <button
          disabled={loading || form.name === "" || !form.name}
          className="btn btn-outline-primary"
          type="button"
          id="button-addon1"
        >
          <Icon name="plus" /> Add
        </button>
      </div>
    </form>
  );
};

const shape = { name: {} };

const apiCall = async (a: FormDataShape) =>
  Promise.resolve(Math.random() * 100);

const Form = FormWrapperLegacy<FormDataShape, number>(FormUI, shape, apiCall, {
  resetAfterSubmit: true,
});

export default Form;
