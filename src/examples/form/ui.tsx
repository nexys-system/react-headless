import React from "react";
import * as T from "../../lib/form/type";
import * as Inputs from "../../components/form/inputs";
import { FormDataShape } from "./type";

const FormUI = ({
  form,
  setForm,
  loading,
  errors,
  onSubmit,
}: T.FormUIProps<FormDataShape>) => {
  return (
    <form onSubmit={onSubmit}>
      <Inputs.InputWrapper error={errors["firstName"]}>
        <Inputs.Input
          value={form.firstName}
          onChange={(firstName) => setForm({ ...form, firstName })}
          disabled={loading}
          placeholder={"First Name"}
          error={errors["firstName"]}
        />
      </Inputs.InputWrapper>
      <Inputs.InputWrapper error={errors["lastName"]}>
        <Inputs.Input
          value={form.lastName}
          onChange={(lastName) => setForm({ ...form, lastName })}
          disabled={loading}
          placeholder={"Last Name"}
          error={errors["lastName"]}
        />
      </Inputs.InputWrapper>

      <button
        disabled={loading}
        type="submit"
        className={`px-4 py-2 text-white font-semibold rounded ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
        }`}
      >
        Send
      </button>
    </form>
  );
};

export default FormUI;
