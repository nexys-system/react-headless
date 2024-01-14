import { FormErrors } from "./type";

export const isNotPartial = <A>(
  formData: Partial<A>,
  formErrors: FormErrors<A>
): formData is A => Object.keys(formErrors).length === 0;
