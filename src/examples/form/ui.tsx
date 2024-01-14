import React from "react";
import * as T from "../../lib/form/type";
import * as Inputs from "../../components/form/inputs";
import { FormDataShape } from "./type";

const FormUI = ({
  form,
  setForm,
  loading,
  errors,
}: T.FormUIProps<FormDataShape>) => {
  return (
    <>
      <Inputs.InputWrapper error={errors["firstName"]}>
        <Inputs.Input
          value={form.firstName}
          onChange={(firstName) => setForm({ ...form, firstName })}
          disabled={loading}
          placeholder={"First Name"}
          errors={errors["firstName"]}
        />
      </Inputs.InputWrapper>
      <Inputs.InputWrapper error={errors["lastName"]}>
        <Inputs.Input
          value={form.lastName}
          onChange={(lastName) => setForm({ ...form, lastName })}
          disabled={loading}
          placeholder={"Last Name"}
          errors={errors["lastName"]}
        />
      </Inputs.InputWrapper>

      <button disabled={loading} type="submit" className="btn btn-primary">
        Send
      </button>
    </>
  );
};

export default FormUI;
