import React from "react";
import * as T from "../type";

/**
 *
 * @param param0 generates a FormUI based on a `def` input array
 * @returns
 */
const FormUIGenerator =
  ({ InputGeneric, InputWrapper, Button }: T.FormUIGeneratorProps) =>
  <A,>(def: T.FormDef<A>[]) =>
  ({
    form,
    setForm,
    loading,
    errors,
    onSubmit,
    children,
  }: T.FormUIProps<A>): JSX.Element => {
    return (
      <form onSubmit={onSubmit}>
        {def.map((item, i) => {
          const Input = InputGeneric(item.uiType);

          return (
            <InputWrapper
              key={i}
              label={item.label}
              error={errors[item.name]}
              info={item.info}
            >
              <Input
                value={form[item.name]}
                onChange={(val) => setForm({ ...form, [item.name]: val })}
                disabled={loading}
                placeholder={item.placeholder}
                errors={errors[item.name]}
                options={item.options && item.options}
              />
            </InputWrapper>
          );
        })}

        <Button disabled={loading} />
        {children}
      </form>
    );
  };

export default FormUIGenerator;
