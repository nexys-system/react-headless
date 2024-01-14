import React from "react";
import * as T from "../type";

export interface FormUIGeneratorProps {
  InputWrapper: (p: T.InputWrapperProps) => JSX.Element;
  InputGeneric: (
    uiType: T.FormUIType
  ) => (p: T.InputProps<any, any>) => JSX.Element; // here cast to any to avoid types issue, if coded properly this should not cause any issues
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

          const value = form[item.name];

          return (
            <InputWrapper label={item.label} error={errors[item.name]} key={i}>
              <Input
                value={value}
                onChange={(val) => setForm({ ...form, [item.name]: val })}
                disabled={loading}
                placeholder={item.placeholder}
                errors={errors[item.name]}
                options={item.options && item.options}
              />
            </InputWrapper>
          );
        })}

        <Button />
      </>
    );
  };

export default FormUIGenerator;
