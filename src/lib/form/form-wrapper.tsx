// generic wrapper for forms, see args below for details
import React from 'react';

import * as T from './type';
import * as Validation from '@nexys/validation';
import { isA } from './utils';

export interface FormWrapperProps<A, Out> {
  data?: {
    dataIn: Partial<A>;
    options?: {
      [k in keyof A]?: { id: number | string; name: string }[];
    };
  };
  onSuccess?: (data: A, out?: Out) => void;
  onErrors?: (err: any, data: A) => { errors?: T.FormErrorsGeneric<A> };
}

/**
 * @type FormShape: shape of the form
 * @param FormUI : UI for the form, must respect FormUIProps
 * @param shape : validation shape
 * @param asyncCall [optional]: async call, typically backend
 * @param onSuccess [optional]: after call to the backend, action
 */
const FormWrapper =
  <FormShape, Out = any>(
    FormUI: (props: T.FormUIProps<FormShape>) => JSX.Element,
    shape: Validation.Type.Shape,
    asyncCall?: (data: FormShape) => Promise<Out>,
    { resetAfterSubmit = true }: { resetAfterSubmit?: boolean } = {}
  ) =>
  ({
    data = { options: {}, dataIn: {} },
    onSuccess,
    onErrors
  }: FormWrapperProps<FormShape, Out>): JSX.Element => {
    type FormErrors = T.FormErrorsGeneric<FormShape>;
    const [form, setForm] = React.useState<Partial<FormShape>>(data.dataIn);
    const [errors, setErrors] = React.useState<FormErrors>({});
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      const validation = Validation.Main.checkObject(form, shape) as FormErrors;

      setErrors(validation);

      if (isA(form, validation)) {
        // here call the backend
        setLoading(true);
        try {
          const out = asyncCall && (await asyncCall(form));
          setLoading(false);
          resetAfterSubmit && setForm({}); // this lines comes before onSuccess, else it creates an error/warning
          onSuccess && onSuccess(form, out);
        } catch (err) {
          if (onErrors) {
            const { errors } = onErrors(err, form);

            if (errors) {
              setErrors(errors);
              setLoading(false);
            }
          }
        }
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <FormUI
          loading={loading}
          errors={errors}
          form={form}
          setForm={setForm}
          options={data.options || {}}
        />
      </form>
    );
  };

export default FormWrapper;
