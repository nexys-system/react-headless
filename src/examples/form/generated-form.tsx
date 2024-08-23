import React from "react";

import * as T from "../../lib/form/type";

import { FormWrapper } from "../../lib/form/form-wrapper";
import { InputGeneric, InputWrapper } from "../../components/form/inputs";
import { SubmitButton } from "../../components/buttons/with-action";
import FormUIGenerator from "../../lib/form/generator/ui";

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
): T.FormErrorsGeneric<FormData> => {
  console.log(v);

  const e: T.FormErrorsGeneric<FormData> = {};

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

const formDef: T.FormDef<FormData>[] = [
  {
    name: "name",
    label: "Name",
    uiType: T.FormUIType.Text,
    placeholder: "add something here",
  },
  {
    name: "isUuid",
    label: "Is Uuid",
    uiType: T.FormUIType.Switch,
    placeholder: "add something here",
  },
  {
    name: "country",
    label: "Country",
    uiType: T.FormUIType.SelectObject,
    placeholder: "lal",
  },
];

const GeneratedForm = () => (
  <FormWrapper
    FormUI={FormUIGenerator({
      InputGeneric,
      InputWrapper,
      Button: SubmitButton,
    })(formDef)}
    onSuccess={console.log}
    clientValidationFunction={clientValidationFunction}
    asyncCall={asyncCall}
  />
);

export default GeneratedForm;
