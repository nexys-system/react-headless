// generic wrapper for forms, see args below for details
import React from "react";

import * as Validation from "@nexys/validation";
import * as T from "./type";
import { isNotPartial, validationArraysToStrings } from "./utils";

export const FormWrapper = <A, B>({
  onSuccess,
  clientValidationFunction,
  FormUI,
  errors: externalErrors,
  asyncCall,
  children,
  formDataDefault,
  options,
  onCancel,
}: T.FormWrapperProps<A, B>) => {
  const [formData, setFormData] = React.useState<Partial<A>>(
    formDataDefault || {}
  );
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
      setErrors(validationArraysToStrings(validation));
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
        .catch((x) => {
          // here we assume that if the request was returned successfully but with a status that is not 2xx, the following object is returned {status, data} (where data is a json object)
          // see https://axios-http.com/docs/handling_errors
          // furhtermore we assume that then the shape returned is {[label]:error}
          if ("data" in x && typeof x.data === "object") {
            setErrors(x.data);
          }

          // tbd
        })
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
      options={options}
      onCancel={onCancel}
    >
      {children}
    </FormUI>
  );
};

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
    { resetAfterSubmit = true }: Partial<T.FormWrapperOptions> = {}
  ) =>
  ({
    onSuccess,
    onErrors,
  }: T.FormWrapperOnActionProps<FormShape, Out>): JSX.Element => {
    const clientValidationFunction = (form: Partial<FormShape>) =>
      Validation.Main.checkObject(form, shape) as T.FormErrors<FormShape>;

    return FormWrapper<FormShape, Out>({
      onSuccess,
      onErrors,
      clientValidationFunction,
      FormUI: FormUIInput,
      asyncCall,
    });
  };
