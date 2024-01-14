import React from "react";
import { FormUIProps } from "../../../lib/form/type";

import * as Inputs from "../../../components/form/inputs";
import FormWrapper from "../../../lib/form/form-wrapper";
import Icon from "../../../components/icon";

export interface FormDataShape {
  name: string;
  description: string;
}

const FormUI = ({
  form,
  setForm,
  loading,
  errors,
  onSubmit,
}: FormUIProps<FormDataShape>) => {
  return (
    <form onSubmit={onSubmit}>
      <Inputs.InputWrapper label="Name" error={errors["name"]}>
        <Inputs.Input
          value={form.name}
          onChange={(name) => setForm({ ...form, name })}
          disabled={loading}
          placeholder={"Name"}
          errors={errors["name"]}
        />
      </Inputs.InputWrapper>

      <Inputs.InputWrapper label="Description" error={errors["description"]}>
        <Inputs.Input
          value={form.description}
          onChange={(description) => setForm({ ...form, description })}
          disabled={loading}
          placeholder={"Description"}
          errors={errors["description"]}
        />
      </Inputs.InputWrapper>
      <button
        disabled={loading}
        className="btn btn-outline-primary"
        type="submit"
      >
        <Icon name="plus" /> Add
      </button>
    </form>
  );
};

const shape = { name: {}, description: {} };

const apiCall = async (a: FormDataShape) => {
  console.log("calling API");
  return Promise.resolve(Math.random() * 100);
};

const Form = FormWrapper<FormDataShape, number>(FormUI, shape, apiCall);

export default Form;
