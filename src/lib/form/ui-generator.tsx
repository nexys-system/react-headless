import React from 'react';
import * as T from './type';

const FormUIGenerator =
  (
    InputWrapper: (p: T.InputWrapperProps) => JSX.Element,
    InputGeneric: (
      uiType: T.FormUIType
    ) => (p: T.InputProps<any>) => JSX.Element, // here cast to any to avoid types issue, if coded properly this should not cause any issues
    Button: () => JSX.Element
  ) =>
  <A,>(def: T.FormDef<A>[]) =>
  ({ form, setForm, loading, errors }: T.FormUIProps<A>): JSX.Element => {
    return (
      <>
        {def.map(item => {
          const Input = InputGeneric(item.uiType);

          return (
            <InputWrapper errors={errors[item.name]}>
              <Input
                value={form[item.name]}
                onChange={val => setForm({ ...form, [item.name]: val })}
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
