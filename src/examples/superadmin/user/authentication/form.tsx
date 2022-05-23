import { FormUIProps } from "../../../../lib/form/type";

import * as Inputs from "../../../../components/form/inputs";
import FormWrapper from "../../../../lib/form/form-wrapper";
import Icon from "../../../../components/icon";
import { FormDataShape, shape, UserAuthenticationType } from "./type";

const userAuthentiactionOptions: {
  id: UserAuthenticationType;
  name: string;
}[] = [{ id: UserAuthenticationType.password, name: "password" }];

const FormUI = ({
  form,
  setForm,
  loading,
  errors,
}: FormUIProps<FormDataShape>) => {
  return (
    <>
      <Inputs.InputWrapper label="Value" errors={errors["value"]}>
        <Inputs.Input
          value={form.value}
          onChange={(value) => setForm({ ...form, value })}
          disabled={loading}
          placeholder={"Value"}
          errors={errors["value"]}
        />
      </Inputs.InputWrapper>

      <Inputs.InputWrapper label="Type" errors={errors["type"]}>
        <Inputs.SelectEnum
          options={userAuthentiactionOptions}
          value={form.type}
          onChange={(type) => setForm({ ...form, type })}
          disabled={loading}
          placeholder={"Type"}
          errors={errors["type"]}
        />
      </Inputs.InputWrapper>

      <Inputs.InputWrapper label="Is Enabled" errors={errors["isEnabled"]}>
        <Inputs.Checkbox
          value={form.isEnabled}
          onChange={(isEnabled) => setForm({ ...form, isEnabled })}
          disabled={loading}
          placeholder={"Is Enabled"}
          errors={errors["isEnabled"]}
        />
      </Inputs.InputWrapper>
      <button
        disabled={loading}
        className="btn btn-outline-primary"
        type="submit"
      >
        <Icon name="plus" /> Add
      </button>
    </>
  );
};

const addUserAuthentication = async (a: FormDataShape): Promise<string> => {
  console.log("calling API");
  return Promise.resolve(String(Math.random() * 100));
};

const Form = FormWrapper<FormDataShape, string>(
  FormUI,
  shape,
  addUserAuthentication
);

export default Form;
