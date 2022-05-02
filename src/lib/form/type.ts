import { Render } from '../view';

// compare with https://github.com/nexys-system/react-bootstrap-components/blob/master/src/components/headless/form/type.ts
export type FormErrorsGeneric<A> = { [k in keyof A]?: string[] };

export interface FormUIProps<FormShape> {
  loading: boolean;
  form: Partial<FormShape>;
  errors: FormErrorsGeneric<FormShape>;
  options: { [k in keyof FormShape]?: { id: number; name: string }[] };
  setForm: (f: Partial<FormShape>) => void;
}

export interface InputProps<A> {
  value?: A;
  onChange: (a: A) => void;
  errors?: string[];
  disabled?: boolean;
  placeholder?: string;
}

// to rework
// id: A is wrong
export interface InputOptionsProps<A> extends InputProps<A> {
  options: { id: A; name: string }[];
}

export interface InputWrapperProps {
  label?: string;
  children: JSX.Element;
  errors?: string[];
}

export enum FormUIType {
  Number,
  Text,
  Textarea,
  Select,
  SelectObject,
  Switch
}

export interface StructureUnitCore<A> {
  name: keyof A;
  label?: string;
}

export interface FormDef<A> extends StructureUnitCore<A> {
  uiType: FormUIType;
  optional: boolean;
  disabled?: boolean;
}

export interface FormViewDef<A> extends FormDef<A> {
  render?: Render<A>;
}
