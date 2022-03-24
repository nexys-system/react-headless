// generic wrapper for forms, see args below for details
import React from 'react';

import * as T from './type';
import * as Validation from '@nexys/validation';
import { isA } from './utils';

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
    onSuccess?: (data: FormShape, out?: Out) => void
  ) =>
  ({
    data = { options: {} }
  }: {
    data?: {
      options: {
        [k in keyof FormShape]?: { id: number; name: string }[];
      };
    };
  }) => {
    type FormErrors = T.FormErrorsGeneric<FormShape>;
    const [form, setForm] = React.useState<Partial<FormShape>>({});
    const [errors, setErrors] = React.useState<FormErrors>({});
    const [loading, setLoading] = React.useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      console.log('a');

      const validation = Validation.Main.checkObject(form, shape) as FormErrors;

      setErrors(validation);

      if (isA(form, validation)) {
        // here call the backend
        setLoading(true);
        const out = asyncCall && (await asyncCall(form));
        setLoading(false);
        onSuccess && onSuccess(form, out);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
        <FormUI
          loading={loading}
          errors={errors}
          form={form}
          setForm={setForm}
          options={data.options}
        />
      </form>
    );
  };

export default FormWrapper;
