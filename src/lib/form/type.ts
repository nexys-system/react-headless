export type FormErrorsGeneric<A> = { [k in keyof A]?: string[] };

export interface FormUIProps<FormShape> {
  loading: boolean;
  form: Partial<FormShape>;
  errors: FormErrorsGeneric<FormShape>;
  options: { [k in keyof FormShape]?: { id: number; name: string }[] };
  setForm: (f: Partial<FormShape>) => void;
}
