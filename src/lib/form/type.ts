import { Render } from "../view";

export interface FormWrapperOnActionProps<A, Out> {
  onSuccess?: (data: A, out?: Out) => void;
  onErrors?: (err: any, data: A) => { errors?: FormErrorsGeneric<A> };
}

export interface FormWrapperProps<A, B> extends FormWrapperOnActionProps<A, B> {
  clientValidationFunction?: (form: Partial<A>) => FormErrors<A>;
  asyncCall?: (formData: A) => Promise<B>;
  FormUI: (props: FormUIProps<A>) => JSX.Element;
  errors?: FormErrors<A>;
  children?: JSX.Element;
  formDataDefault?: Partial<A>;
  options?: FormOptionSets<A>;
}

export interface FormWrapperOptions {
  resetAfterSubmit: boolean;
}

export interface FormUIGeneratorProps {
  InputWrapper: (p: InputWrapperProps) => JSX.Element;
  InputGeneric: (
    uiType: FormUIType
  ) => (p: InputProps<any, any>) => JSX.Element; // here cast to any to avoid types issue, if coded properly this should not cause any issues
  Button: (a: SubmitButtonProps) => JSX.Element;
}

// compare with https://github.com/nexys-system/react-bootstrap-components/blob/master/src/components/headless/form/type.ts
export type FormErrorsGeneric<A> = { [k in keyof A]?: string };

export type FormOptionSets<FormShape> = {
  [k in keyof FormShape]?: { id: number | string; name: string }[];
};

interface FormUIPropsCore<FormShape> {
  loading: boolean;
  form: Partial<FormShape>;
  errors: FormErrorsGeneric<FormShape>;
  options?: FormOptionSets<FormShape>;
  setForm: (f: Partial<FormShape>) => void;
}

export interface FormUIProps<FormShape> extends FormUIPropsCore<FormShape> {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: JSX.Element;
}

export interface OptionUnit<Id = string> {
  id: Id;
  name: string;
}

export interface InputProps<A, Id extends string | number = number> {
  value?: A;
  onChange: (a?: A) => void;
  errors?: string;
  disabled?: boolean;
  placeholder?: string;
  options?: OptionUnit<Id>[];
}

// same as input props but options is mandatory
export interface InputOptionProps<A, Id extends string | number>
  extends InputProps<A, Id> {
  options: OptionUnit<Id>[];
}

export interface InputWrapperProps {
  label?: string;
  error?: string;
  info?: string;
  children: JSX.Element;
}

export enum FormUIType {
  Number,
  Text,
  Textarea,
  Select,
  SelectNumber,
  SelectObject,
  SelectObjectNumber,
  Switch,
  Date,
  Time,
  DateTime,
  RichText,
}

export interface StructureUnitCore<A> {
  name: keyof A;
  label?: string;
}

export interface FormDef<A> extends StructureUnitCore<A> {
  uiType: FormUIType;
  optional?: boolean;
  disabled?: boolean;
  placeholder?: string;
  description?: string;

  info?: string;
  options?: OptionUnit<any>[];
}

export interface FormViewDef<A> extends FormDef<A> {
  render?: Render<A>;
}

export type FormErrors<A> = {
  [k in keyof A]?: string;
};

export interface SubmitButtonProps {
  disabled?: boolean;
  loading?: boolean;
}

export interface BackButtonProps {
  onClick: () => void;
}
