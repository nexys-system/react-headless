import { Render } from "../view";

// compare with https://github.com/nexys-system/react-bootstrap-components/blob/master/src/components/headless/form/type.ts
export type FormErrorsGeneric<A> = { [k in keyof A]?: string };

export type FormOptionSets<A> = {
  [k in keyof A]?: { id: number | string; name: string }[];
};

export interface FormUIProps<FormShape> {
  loading: boolean;
  form: Partial<FormShape>;
  errors: FormErrorsGeneric<FormShape>;
  options?: {
    [k in keyof FormShape]?: { id: number | string; name: string }[];
  };
  setForm: (f: Partial<FormShape>) => void;
}

export interface FormUIProp2s<FormShape> {
  loading: boolean;
  form: Partial<FormShape>;
  errors: FormErrorsGeneric<FormShape>;
  options?: FormOptionSets<FormShape>;
  setForm: (x: Partial<FormShape>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children?: JSX.Element;
}

export interface InputProps<A, Id extends string | number = number> {
  value?: A;
  onChange: (a?: A) => void;
  errors?: string;
  disabled?: boolean;
  placeholder?: string;
  options?: OptionUnit<Id>[];
}

export interface OptionUnit<Id = string> {
  id: Id;
  name: string;
}

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

export interface WrapperProps {
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
  optional: boolean;
  disabled?: boolean;
  placeholder?: string;
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

export enum UXType {
  text = 1,
  number = 2,
  checkbox = 3,
}

export interface FormDefUnit<A> {
  uxType: UXType;
  label: string;
  description?: string;
  name: keyof A;
  placeholder?: string;
  info?: string;
}
