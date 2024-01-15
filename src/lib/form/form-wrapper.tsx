// generic wrapper for forms, see args below for details
import React from "react";

import * as T from "./type";
import * as Validation from "@nexys/validation";
import { isNotPartial } from "./utils";

export const FormWrapper = <A, B>({
  onSuccess,
  clientValidationFunction,
  FormUI,
  errors: externalErrors,
  asyncCall,
  children,
}: T.FormWrapperProps<A, B>) => {
  const [formData, setFormData] = React.useState<Partial<A>>({});
  const [errors, setErrors] = React.useState<T.FormErrors<A>>(
    externalErrors || {}
  );
  const [loading, setLoading] = React.useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // client validation
    const validation = clientValidationFunction
      ? clientValidationFunction(formData)
      : {};

    if (!isNotPartial(formData, validation)) {
      // errors found
      setErrors(validation);
      return;
    }

    // reset errors
    setErrors({});
    // and pass value up

    if (asyncCall) {
      setLoading(true);
      asyncCall(formData)
        .then((response) => {
          onSuccess && onSuccess(formData, response);
        })
        .catch((x) => setErrors(x))
        .finally(() => setLoading(false));

      return;
    }

    onSuccess && onSuccess(formData);
  };

  return (
    <FormUI
      loading={loading}
      form={formData}
      setForm={setFormData}
      errors={errors}
      onSubmit={handleSubmit}
    >
      {children}
    </FormUI>
  );
};

interface FormWrapperOptions {
  resetAfterSubmit: boolean;
}

/**
 * @type FormShape: shape of the form
 * @param FormUI : UI for the form, must respect FormUIProps
 * @param shape : validation shape
 * @param asyncCall [optional]: async call, typically backend
 * @param onSuccess [optional]: after call to the backend, action
 * note this is the old version of the formwrapper that maps to the new one
 */
export const FormWrapperLegacy =
  <FormShape, Out = any>(
    FormUIInput: (props: T.FormUIProps<FormShape>) => JSX.Element,
    shape: Validation.Type.Shape,
    asyncCall?: (data: FormShape) => Promise<Out>,
    { resetAfterSubmit = true }: Partial<FormWrapperOptions> = {}
  ) =>
  ({
    onSuccess,
    onErrors,
  }: T.FormWrapperOnActionProps<FormShape, Out>): JSX.Element => {
    const clientValidationFunction = (form: any) =>
      Validation.Main.checkObject(form, shape) as any;

    return FormWrapper<FormShape, Out>({
      onSuccess,
      onErrors,
      clientValidationFunction,
      FormUI: FormUIInput,
      asyncCall,
    });
  };
