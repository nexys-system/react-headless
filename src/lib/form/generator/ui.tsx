import React from "react";
import * as T from "../type";

export interface FormUIGeneratorProps {
  InputWrapper: (p: T.InputWrapperProps) => JSX.Element;
  InputGeneric: (uiType: T.FormUIType) => (p: T.InputProps<any>) => JSX.Element; // here cast to any to avoid types issue, if coded properly this should not cause any issues
  Button: () => JSX.Element;
}

const FormUIGenerator =
  ({ InputGeneric, InputWrapper, Button }: FormUIGeneratorProps) =>
  <A,>(def: T.FormDef<A>[]) =>
  ({ form, setForm, loading, errors }: T.FormUIProps<A>): JSX.Element => {
    return (
      <>
        {def.map((item, i) => {
          const Input = InputGeneric(item.uiType);

          return (
            <InputWrapper errors={errors[item.name]} key={i}>
              <Input
                value={form[item.name]}
                onChange={(val) => setForm({ ...form, [item.name]: val })}
                disabled={loading}
                placeholder={item.label}
                errors={errors[item.name]}
              />
            </InputWrapper>
          );
        })}

        <Button />
      </>
    );
  };

export default FormUIGenerator;
