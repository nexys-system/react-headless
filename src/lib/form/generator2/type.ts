import { FormErrorsGeneric } from "../type";

export type FormErrors<A> = {
  [k in keyof A]?: string;
};

export interface FormUIProps<A> {
  loading: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  errors: FormErrorsGeneric<A>;
  form: Partial<A>;
  setForm: (x: Partial<A>) => void;
  options?: { [k in keyof A]?: { id: number | string; name: string }[] };
  children?: JSX.Element;
}

export interface WrapperProps {
  label?: string;
  info?: string;
  error?: string;
  children: JSX.Element;
}

export interface OptionUnit<Id = string> {
  id: Id;
  name: string;
}

export interface InputProps<T> {
  onChange: (s: T) => void;
  value?: T;
  placeholder?: string;
  disabled?: boolean;
}

export interface InputOptionProps<A, Id> extends InputProps<A> {
  options: OptionUnit<Id>[];
}

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
