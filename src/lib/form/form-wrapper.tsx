// generic wrapper for forms, see args below for details
import React from "react";

import * as T from "./type";
import * as Validation from "@nexys/validation";

import { FormWrapper as F2 } from "./generator2";
import { FormUIProps } from "./generator2/type";

export interface FormWrapperProps<A, Out> {
  data?: {
    dataIn: Partial<A>;
    options?: T.FormOptionSets<A>;
  };
  onSuccess?: (data: A, out?: Out) => void;
  onErrors?: (err: any, data: A) => { errors?: T.FormErrorsGeneric<A> };
}

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
const FormWrapper =
  <FormShape, Out = any>(
    FormUIInput: (props: FormUIProps<FormShape>) => JSX.Element,
    shape: Validation.Type.Shape,
    asyncCall?: (data: FormShape) => Promise<Out>,
    { resetAfterSubmit = true }: Partial<FormWrapperOptions> = {}
  ) =>
  ({
    data = { options: {}, dataIn: {} },
    onSuccess,
    onErrors,
  }: FormWrapperProps<FormShape, Out>): JSX.Element => {
    const clientValidationFunction = (form: any) =>
      Validation.Main.checkObject(form, shape) as any;

    return F2<FormShape, Out>({
      onSuccess,
      onErrors,
      clientValidationFunction,
      FormUI: FormUIInput,
      asyncCall,
    });
  };

export default FormWrapper;
