import { test, expect } from "vitest";
import { FormDef, FormUIType } from "./type";
import * as U from "./utils";

interface Data {
  firstName: string;
  lastName?: string;
}

const def: FormDef<Data>[] = [
  { name: "firstName", uiType: FormUIType.Text, optional: false },
  { name: "lastName", uiType: FormUIType.Text, optional: true },
];

const shape = { firstName: { optional: false }, lastName: { optional: true } };

test("def to shape object", () => {
  expect(U.defToShape(def)).toEqual(shape);
});

test("clientValidationFunctionFromShape", () => {
  const fx = U.clientValidationFunctionFromShape({
    name: {},
    label: { optional: true },
  });

  expect(fx({})).toEqual({ name: "This field is required" });
  expect(fx({ name: "john", label: "John" })).toEqual({});
  expect(
    fx({ name: "john", label: "John", doesNotExistInShape: "gfd" })
  ).toEqual({ doesNotExistInShape: "this key cannot be included" });
});
