import React from "react";

import * as T from "../../lib/form/type";

import { FormWrapper, generateFormUI } from "../../lib/form/generator2/index";
import {
  InputGeneric,
  InputWrapper as Wrapper,
} from "../../components/form/inputs";
import { SubmitButton } from "../../components/buttons/with-action";

enum UIStyle {
  card = 1,
  list = 2,
}

interface FormData {
  name: string;
  isUuid: boolean;
  country: { id: number; name: string };
  lang: { id: string; name: string };
  uiStyle: UIStyle;
}

const clientValidationFunction = (
  v: Partial<FormData>
): T.FormErrors<FormData> => {
  console.log(v);

  const e: T.FormErrors<FormData> = {};

  if (!("name" in v) || v["name"] === "") {
    e.name = "wth dude";
  }

  if (!("isUuid" in v) || v.isUuid === false) {
    e.isUuid = "wth dude";
  }

  return e;
};

const asyncCall = () =>
  new Promise((r, f) => {
    setTimeout(() => {
      console.log("sdf");
      f({ country: "sdf" });
    }, 2000);
  });

const formDef: T.FormDefUnit<FormData>[] = [
  {
    name: "name",
    label: "Name",
    uxType: T.FormUIType.Text,
    placeholder: "add something here",
  },
  {
    name: "isUuid",
    label: "Is Uuid",
    uxType: T.FormUIType.Switch,
    placeholder: "add something here",
  },
];

const GeneratedForm = () => {
  return (
    <>
      <FormWrapper
        FormUI={generateFormUI(InputGeneric, Wrapper, SubmitButton)(formDef)}
        onSuccess={console.log}
        clientValidationFunction={clientValidationFunction}
        asyncCall={asyncCall}
      />
    </>
  );
};
export default GeneratedForm;
