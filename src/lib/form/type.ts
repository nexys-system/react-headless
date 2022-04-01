
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

export interface InputOptionsProps<A> extends InputProps<A> {
  options: { id: A; name: string }[];
}

export interface InputWrapperProps {
  label?: string;
  children: JSX.Element;
  errors?: string[];
}
