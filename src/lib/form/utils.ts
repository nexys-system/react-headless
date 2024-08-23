import { FormDef, FormErrorsGeneric, FormUIType } from "./type";
import * as Validation from "@nexys/validation";

export const clientValidationFunctionFromShape =
  <A>(shape: Validation.Type.Shape) =>
  (input: Partial<A>): FormErrorsGeneric<A> => {
    const out = Validation.Main.checkObject(input, shape);
    return validationArraysToStrings(out);
  };

export const validationArraysToStrings = <A>(
  out: Validation.Type.Error | Validation.Type.ErrorOut
): FormErrorsGeneric<A> => {
  const e: FormErrorsGeneric<A> = {};

  const handleError = (value: any): string => {
    return Array.isArray(value) && value.length > 0 ? value[0] : "";
  };

  const traverse = (obj: any, target: any): void => {
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        target[key as keyof A] = handleError(value);
      } else if (value && typeof value === "object") {
        // Create a nested object if needed
        target[key as keyof A] = target[key as keyof A] || ({} as any);
        traverse(value, target[key as keyof A]);
      }
    });
  };

  traverse(out, e);

  return e;
};

export const enumToOptions = <A>(keys: {
  [s: number]: string;
}): { id: A; name: string }[] =>
  Object.keys(keys)
    .filter((x) => !isNaN(Number(x)))
    .map((x) => ({ id: Number(x) as any as A, name: keys[Number(x)] }));

export const isNotPartial = <A>(
  formData: Partial<A>,
  formErrors: FormErrorsGeneric<A>
): formData is A => Object.keys(formErrors).length === 0;

const getType = (uiType: FormUIType) => {
  if ([FormUIType.SelectNumber, FormUIType.Number].includes(uiType)) {
    return "number";
  }

  return undefined;
};

export const defToShape = <A>(def: FormDef<A>[]): Validation.Type.Shape => {
  const r: Validation.Type.Shape = {};

  def.forEach((d) => {
    // if select object, check for the object
    if (
      [FormUIType.SelectObject, FormUIType.SelectObjectNumber].includes(
        d.uiType
      )
    ) {
      r[d.name as any] = {
        $object: {
          id: {
            type:
              d.uiType === FormUIType.SelectObjectNumber ? "number" : "string",
          },
          name: { optional: true },
        },
        optional: d.optional,
      };
      return;
    }

    const type = getType(d.uiType);

    r[d.name as any] = { type, optional: d.optional };
  });

  return r;
};
